import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterOutlet,
  ],
  exports: [MainComponent]
})
export class MainModule { }
