import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {DefaultTimer} from "../../utils/default-timer";
import {TimerState} from "../../utils/timer-state";

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

    timer$!: Observable<number>;
    subscription$!: Subscription

    timerState = TimerState.POMODORO
    time = DefaultTimer.POMODORO;
    timerStarted = false;

    ngOnInit(): void {
        this.timer$ = new Observable<number>(observer => {
            let count = this.time;
            const interval = setInterval(() => {
                if (count.valueOf() === 0) {
                    clearInterval(interval);
                    this.timerStarted = false;

                    switch (this.timerState) {
                        case TimerState.POMODORO:
                            this.timerState = TimerState.SHORT_BREAK;
                            this.time = DefaultTimer.SHORT_BREAK;
                            break;
                        case TimerState.SHORT_BREAK:
                            this.timerState = TimerState.POMODORO;
                            this.time = DefaultTimer.POMODORO;
                            break;
                        case TimerState.LONG_BREAK:
                            this.timerState = TimerState.POMODORO;
                            this.time = DefaultTimer.POMODORO;
                            break;
                    }

                    return;
                }

                observer.next(count--);
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        });
    }

    startTimer() {
        if (this.timerStarted) return;
        if (this.time.valueOf() === 0) return;

        this.timerStarted = true;
        this.subscription$ = this.timer$.subscribe(value => {
            this.time = value;
        });
    }

    stopTimer() {
        this.timerStarted = false;
        this.subscription$.unsubscribe();
    }

    changeTimerState(timerState: string) {
        const selectedState = timerState as TimerState;

        if (selectedState === this.timerState) return;
        if (this.timerStarted) return;

        this.timerState = selectedState;

        switch (this.timerState) {
            case TimerState.POMODORO:
                this.time = DefaultTimer.POMODORO;
                break;
            case TimerState.SHORT_BREAK:
                this.time = DefaultTimer.SHORT_BREAK;
                break;
            case TimerState.LONG_BREAK:
                this.time = DefaultTimer.LONG_BREAK;
                break;
        }
    }
}
