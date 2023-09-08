import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CoreModule } from "../../core/core.module";


@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        CoreModule
    ]
})
export class DashboardModule { }
