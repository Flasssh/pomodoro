import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {heroChartBar, heroChevronDown, heroChevronUp, heroCog, heroXMark} from "@ng-icons/heroicons/outline";
import {ChronoComponent} from './components/chrono/chrono.component';
import {TasksComponent} from './components/tasks/tasks.component';
import { CreateTaskComponent } from './components/tasks/components/create-task/create-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ChronoComponent,
        TasksComponent,
        CreateTaskComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        NgIconsModule.withIcons({heroCog, heroChartBar, heroXMark, heroChevronUp, heroChevronDown}),
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
