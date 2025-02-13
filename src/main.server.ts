export { AppServerModule as default } from './app/app.module.server';

// import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// import { provideServerRendering } from '@angular/platform-server';
// import { provideServerRouting } from '@angular/ssr';
// import { appConfig } from './app.config';
// import { serverRoutes } from './app.routes.server';

// const serverConfig: ApplicationConfig = {
//   providers: [
//     provideServerRendering(),
//     provideServerRouting(serverRoutes)
//   ]
// };

// export const config = mergeApplicationConfig(appConfig, serverConfig);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { config } from './app/app.config.server';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// // const bootstrap = () => bootstrapApplication(AppComponent, config);
// const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);
// export default bootstrap;
