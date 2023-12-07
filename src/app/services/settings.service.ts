import {Injectable} from '@angular/core';
import {Settings, SettingsTimer} from "../shared/models/Settings";
import {DefaultSettings} from "../utils/default-settings";
import {DefaultTimer} from "../utils/default-timer";

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    settings: Settings = {
        autoStart: false,
        notification: false,
        interval: 0,
        timer: {
            pomodoro: 0,
            shortBreak: 0,
            longBreak: 0
        }
    };

    getSettings(): Settings {
        return this.settings;
    }

    getTimerSettings(): SettingsTimer {
        return this.settings.timer;
    }

    onInit(): void {
        this.loadSettingsFromLocalStorage();
    }

    loadSettingsFromLocalStorage(): void {
        const settings = localStorage.getItem('settings');
        if (settings) {
            this.settings = JSON.parse(settings);
        } else {
            const defaultAutoStart = !!DefaultSettings.AUTO_START.valueOf();
            const defaultNotification = !!DefaultSettings.NOTIFICATION.valueOf();
            const defaultInterval = DefaultSettings.INTERVAL;

            const defaultPomodoro = DefaultTimer.POMODORO;
            const defaultShortBreak = DefaultTimer.SHORT_BREAK;
            const defaultLongBreak = DefaultTimer.LONG_BREAK;

            this.settings = {
                autoStart: defaultAutoStart,
                notification: defaultNotification,
                interval: defaultInterval,
                timer: {
                    pomodoro: defaultPomodoro,
                    shortBreak: defaultShortBreak,
                    longBreak: defaultLongBreak
                }
            };

            this.saveSettingsToLocalStorage();
        }
    }


    saveSettingsToLocalStorage(): void {
        localStorage.setItem('settings', JSON.stringify(this.settings));
    }
}
