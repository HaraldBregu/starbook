import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';
import { AppComponent } from './app.component';

@NgModule({
    imports: [AppModule, ServerModule],
    providers: [provideServerRouting(serverRoutes)],
    bootstrap: [AppComponent],
})
export class AppServerModule { }
