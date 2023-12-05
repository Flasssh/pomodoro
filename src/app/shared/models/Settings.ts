export interface Settings {
    autoStart: AutoStart;
    notification: Notification;
    interval: number;
    timer: {
        pomodoro: number;
        shortBreak: number;
        longBreak: number;
    }
}

export type AutoStart = false | true;
export type Notification = false | true;
