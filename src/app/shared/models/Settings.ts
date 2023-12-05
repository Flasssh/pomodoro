export interface Settings {
    autoStart: AutoStart;
    notification: Notification;
    interval: number;
    timer: SettingsTimer
}

export interface SettingsTimer {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
}


export type AutoStart = false | true;
export type Notification = false | true;
