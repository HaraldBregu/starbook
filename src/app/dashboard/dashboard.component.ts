import { Component, computed, inject, model } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  size = model.required<{ width: string, height: string }>()

  width = computed(() => this.size().width + 'px')
  height = computed(() => this.size().height + 'px')

  constructor() {

  }
}
