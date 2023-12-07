import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../../../shared/services/settings.service";
import {SettingsTimer} from "../../../../shared/models/settings";

@Component({
    selector: 'app-timer-settings',
    templateUrl: './timer-settings.component.html',
    styleUrls: ['./timer-settings.component.scss']
})
export class TimerSettingsComponent implements OnInit {

    timer?: SettingsTimer

    constructor(
        private readonly settingsService: SettingsService
    ) {
    }

    ngOnInit(): void {
        this.timer = this.settingsService.getTimerSettings();
    }


    incrementTimer(amount = 1, timerType: string): void {

        if (this.timer === undefined) {
            return;
        }

        // because time is in seconds, we multiply by 60
        const value = 60 * amount;

        switch (timerType) {
            case 'pomodoro':
                this.timer.pomodoro += value;
                break;
            case 'shortBreak':
                this.timer.shortBreak += value;
                break;
            case 'longBreak':
                this.timer.longBreak += value;
                break;
        }

        this.settingsService.saveSettingsToLocalStorage();
    }

    decrementTimer(amount = 1, timerType: string): void {
        if (this.timer === undefined) {
            return;
        }

        // because time is in seconds, we multiply by 60
        const value = 60 * amount;

        // if the timer is already less than 1 minute, we don't want to decrement it
        if (this.timer[timerType as keyof typeof this.timer] < value) {
            return;
        }

        switch (timerType) {
            case 'pomodoro':
                this.timer.pomodoro -= value;
                break;
            case 'shortBreak':
                this.timer.shortBreak -= value;
                break;
            case 'longBreak':
                this.timer.longBreak -= value;
                break;
        }

        this.settingsService.saveSettingsToLocalStorage();
    }

}
