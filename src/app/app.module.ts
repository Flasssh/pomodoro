import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {
    heroBell,
    heroChartBar,
    heroChevronDown,
    heroChevronUp, heroClock,
    heroCog, heroFunnel,
    heroPencil,
    heroXMark
} from "@ng-icons/heroicons/outline";
import {TimerComponent} from './components/timer/timer.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {CreateTaskComponent} from './components/tasks/components/create-task/create-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaskModalComponent} from './components/tasks/components/task-modal/task-modal.component';
import {FooterComponent} from './components/footer/footer.component';
import {ShowTimePipe} from './pipe/show-time.pipe';
import {TasksService} from "./services/tasks.service";
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { TimerSettingsComponent } from './pages/settings/components/timer-settings/timer-settings.component';
import {SettingsService} from "./services/settings.service";
import { ShowMinutesPipe } from './pipe/show-minutes.pipe';
import { NotificationSettingsComponent } from './pages/settings/components/notification-settings/notification-settings.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TimerComponent,
        TasksComponent,
        CreateTaskComponent,
        TaskModalComponent,
        FooterComponent,
        ShowTimePipe,
        SettingsComponent,
        HomeComponent,
        TimerSettingsComponent,
        ShowMinutesPipe,
        NotificationSettingsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        NgIconsModule.withIcons({heroCog, heroChartBar, heroXMark, heroChevronUp, heroChevronDown, heroPencil, heroFunnel, heroClock, heroBell}),
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (taskService: TasksService) => () => taskService.findTaskInLocalStorage(),
            deps: [TasksService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (settingsService: SettingsService) => () => settingsService.onInit(),
            deps: [SettingsService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
