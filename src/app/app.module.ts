import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { Landing } from "./pages/landing/landing";
import { Notfound } from "./pages/notfound/notfound";
import { AppLayout } from "./layout/component/app.layout";
import { Dashboard } from "./pages/dashboard/dashboard";

const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            // { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            // { path: 'documentation', component: Documentation },
            // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    // },
    // {
    //     path: "",
    //     loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    // },
    {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        provideClientHydration(withEventReplay()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
