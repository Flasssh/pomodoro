import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {
    heroChartBar,
    heroChevronDown,
    heroChevronUp,
    heroCog,
    heroPencil,
    heroXMark
} from "@ng-icons/heroicons/outline";
import {ChronoComponent} from './components/chrono/chrono.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {CreateTaskComponent} from './components/tasks/components/create-task/create-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaskModalComponent} from './components/tasks/components/task-modal/task-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ChronoComponent,
        TasksComponent,
        CreateTaskComponent,
        TaskModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        NgIconsModule.withIcons({heroCog, heroChartBar, heroXMark, heroChevronUp, heroChevronDown, heroPencil}),
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
