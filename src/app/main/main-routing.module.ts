import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: "",
    component: CompanyComponent,
    children: [
      {
        path: "page",
        component: CompanyComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: "company",
    component: CompanyComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
