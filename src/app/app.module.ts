import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {
    heroArrowPath,
    heroBell,
    heroChartBar,
    heroChevronDown,
    heroChevronUp,
    heroClock,
    heroCog6Tooth,
    heroFunnel,
    heroMoon,
    heroPencil,
    heroSun,
    heroXMark
} from "@ng-icons/heroicons/outline";
import {TimerComponent} from './pages/home/components/timer/timer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from './shared/components/footer/footer.component';
import {ShowTimePipe} from './pipe/show-time.pipe';
import {TasksService} from "./shared/services/tasks.service";
import {SettingsComponent} from './pages/settings/settings.component';
import {HomeComponent} from './pages/home/home.component';
import {TimerSettingsComponent} from './pages/settings/components/timer-settings/timer-settings.component';
import {SettingsService} from "./shared/services/settings.service";
import {ShowMinutesPipe} from './pipe/show-minutes.pipe';
import {
    NotificationSettingsComponent
} from './pages/settings/components/notification-settings/notification-settings.component';
import {ControlSettingsComponent} from './pages/settings/components/control-settings/control-settings.component';
import {DarkmodeService} from "./shared/services/darkmode.service";
import {BadgeComponent} from './shared/components/badge/badge.component';
import {TasksComponent} from "./pages/home/components/tasks/tasks.component";
import {CreateTaskComponent} from "./pages/home/components/tasks/components/create-task/create-task.component";
import {TaskModalComponent} from "./pages/home/components/tasks/components/task-modal/task-modal.component";

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
        NotificationSettingsComponent,
        ControlSettingsComponent,
        BadgeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        NgIconsModule.withIcons({
            heroCog6Tooth,
            heroChartBar,
            heroXMark,
            heroChevronUp,
            heroChevronDown,
            heroPencil,
            heroFunnel,
            heroClock,
            heroBell,
            heroMoon,
            heroSun,
            heroArrowPath
        }),
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
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (darkmodeService: DarkmodeService) => () => darkmodeService.loadDarkMode(),
            deps: [DarkmodeService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
