/**
 * the polyfills must be the first thing imported
 */
import './polyfills.ts';
import './__2.1.1.workaround.ts'; // temporary until 2.1.1 things are patched in Core
import './__workaround.node';
import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';

import { createEngine } from 'angular2-express-engine';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.node.module';
import { environment } from './environments/environment';
import { routes } from './server.routes';

// App

const app  = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const port = process.env.PORT || 80 || 8080;
// const port = 4200;
// sitemap.generate(app);

/**
 * enable prod mode for production environments
 */
// if (environment.production) {
//   enableProdMode();
// }
// console.log('env is: ' + JSON.stringify(environment));

/**
 * Express View
 */
app.engine('.html', createEngine({}));
app.set('views', path.join(ROOT, 'client'));
app.set('view engine', 'html');

/**
 * Enable compression
 */
app.use(compression());
// app.use(function(req, res) {
//   return res.redirect('https://' + req.hostname + req.originalUrl);
// })
/**
 * serve static files
 */
app.use('/', express.static(path.join(ROOT, 'client'), {index: false}));

/* There are code from old server */
if (environment.production) {
  app.use('/', require('redirect-https')({
    body: '',
    port: 443,
    trustProxy: true
  }))
  app.all('/*', function(req: any, res: any, next) {
    if(!/^www\./.test(req.headers.host) && req.headers.host === "starbook.co") {
      res.status(301).redirect(req.protocol + '://www.' + req.headers.host + req.url)
    } else {
      next()
    }
  })
} else {
  // app.use('/', require('redirect-https')({
  //   body: '',
  //   port: 443,
  //   trustProxy: true
  // }))
  // app.all('/*', function(req: any, res: any, next) {
  //   console.log('host: ' + req.headers.host);
  //   console.log('url: ' + JSON.stringify(req.url));
  //   if (!/https/.test(req.protocol) && (req.headers.host === "localhost:4200")){
  //     res.redirect("http://" + req.headers.host + req.url);
  //   } else {
  //     next()
  //   }
  // })
}


/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req: any, res: any) {
  // console.log('protocol: ' + req.protocol);
  // console.log('host: ' + req.headers.host);
  // console.log('url: ' + JSON.stringify(req.url));
  res.render('index', {
    req,
    res,
    ngModule: AppModule,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: req.hostname
  });
}

/**
 * use universal for specific routes
 */
app.get('/', ngApp);
app.get('/robots.txt', function(req, res) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: \nSitemap: https://www.starbook.co/sitemap.xml");
})
app.get('/sitemap.xml', function(req, res) {
  res.type('text/xml')
  res.send("<?xml version='1.0' encoding='UTF-8'?><urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'><url><loc>https://www.starbook.co/</loc></url><url><loc>https://www.starbook.co/services</loc></url><url><loc>https://www.starbook.co/requests/service</loc></url><url><loc>https://www.starbook.co/info/about</loc></url><url><loc>https://www.starbook.co/info/help</loc></url><url><loc>https://www.starbook.co/info/legal</loc></url><url><loc>https://www.starbook.co/account/professional</loc></url></urlset>");
})
routes.forEach(route => {
  app.get(`/${route}`, ngApp);
  app.get(`/${route}/*`, ngApp);
});

/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req: any, res: any) {
  res.setHeader('Content-Type', 'application/json');
  const pojo = {status: 404, message: 'No Content'};
  const json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

/* There are code from old server (app.js) */
http.createServer(app).listen(port, () => {
  console.log(`Listening on port ${port}`);
});

if (environment.production) { // This do not work for heroku
  let options = {
    key: fs.readFileSync(__dirname + '/cert/key.pem', 'utf8'),
    cert: fs.readFileSync(__dirname + '/cert/server.crt', 'utf8')
  };
  https.createServer(options, app).listen(443, () => {
    console.log(`Listening on port 443`);
  });
}
