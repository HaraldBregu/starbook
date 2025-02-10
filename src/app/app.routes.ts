import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "company",
        component: CompanyComponent,
    },
    {
        path: "landing",
        component: LandingComponent,
    },
];