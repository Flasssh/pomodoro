import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {heroChartBar, heroCog, heroXMark} from "@ng-icons/heroicons/outline";
import {ChronoComponent} from './components/chrono/chrono.component';
import {TasksComponent} from './components/tasks/tasks.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ChronoComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        NgIconsModule.withIcons({heroCog, heroChartBar, heroXMark}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
