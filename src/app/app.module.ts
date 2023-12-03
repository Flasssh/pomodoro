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
import {TimerComponent} from './components/timer/timer.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {CreateTaskComponent} from './components/tasks/components/create-task/create-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaskModalComponent} from './components/tasks/components/task-modal/task-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowTimePipe } from './pipe/show-time.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TimerComponent,
        TasksComponent,
        CreateTaskComponent,
        TaskModalComponent,
        FooterComponent,
        ShowTimePipe
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
