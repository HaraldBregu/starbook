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
if (environment.production) {
  enableProdMode();
}

/**
 * Express View
 */
app.engine('.html', createEngine({}));
app.set('views', path.join(ROOT, 'client'));
app.set('view engine', 'html');

/* There are code from old server */
// app.use('/', require('redirect-https')({
//   body: '',
//   port: 443,
//   trustProxy: true
// }))
// app.all('/*', function(req: any, res: any, next) {
//   if(!/^www\./.test(req.headers.host)) {
//     res.status(301).redirect(req.protocol + '://www.' + req.headers.host + req.url)
//   } else {
//     next()
//   }
// })


/**
 * Enable compression
 */
app.use(compression());

/**
 * serve static files
 */
app.use('/', express.static(path.join(ROOT, 'client'), {index: false}));

/**
 * place your api routes here
 */
// app.use('/api', api);
// app.use(function (req, res, next) {
//     if ('/robots.txt' == req.url) {
//         res.type('text/plain')
//         res.send("User-agent: *\nDisallow: /");
//     } else {
//         next();
//     }
// });

/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req: any, res: any) {
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
  res.send("User-agent: *\nDisallow:");
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
// let options = {
//   key: fs.readFileSync(__dirname + '/cert/key.pem', 'utf8'),
//   cert: fs.readFileSync(__dirname + '/cert/server.crt', 'utf8')
// };
// https.createServer(options, app).listen(443, () => {
//   console.log(`Listening on port 443`);
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
