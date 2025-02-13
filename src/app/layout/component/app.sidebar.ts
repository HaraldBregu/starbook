import { Component, ElementRef, inject } from '@angular/core';
import { AppMenu } from './app.menu';
import { LayoutService } from '../service/layout.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu, NgClass],
    templateUrl: "./app.sidebar.html"
})
export class AppSidebar {
    layoutService = inject(LayoutService)

    constructor(public el: ElementRef) { }

    get containerClass() {
        // const inactive = this.layoutService.layoutState().staticMenuDesktopInactive 
        // const active = this.layoutService.layoutState().overlayMenuActive


        return {
            'layout-overlay': this.layoutService.layoutConfig().menuMode === 'overlay',
            'layout-static': this.layoutService.layoutConfig().menuMode === 'static',

            'sm:translate-x-0': this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === 'static',

            'layout-static-inactive': this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === 'static',
            'layout-overlay-active': this.layoutService.layoutState().overlayMenuActive,
            'layout-mobile-active': this.layoutService.layoutState().staticMenuMobileActive
        };
    }

}