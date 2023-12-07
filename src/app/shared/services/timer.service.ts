import {Injectable} from '@angular/core';
import {TasksService} from "./tasks.service";
import {TimerState} from "../../utils/timer-state";

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    constructor(
        private readonly tasksService: TasksService,
    ) {
    }

    getCurrentTask() {
        const nonCompletedTask = this.tasksService.tasks.filter(t => !t.completed);

        if (nonCompletedTask.length === 0) {
            return undefined;
        }

        return nonCompletedTask[0];
    }

    addOneDoneToCurrentTask() {
        const task = this.getCurrentTask();
        if (!task) {
            return;
        }

        if (task) {
            task.done++;

            if (task.done === task.iteration) {
                task.completed = true;
            }

            this.tasksService.updateTask$(task);
        }
    }

    loadAllTimes() {
        return JSON.parse(localStorage.getItem('times') || '{}');
    }

    loadCurrentTime(timerState: TimerState) {
        const times = this.loadAllTimes();
        return times[timerState] || null;
    }

    saveCurrentTime(time: number, timerState: TimerState) {
        const times = this.loadAllTimes();

        times[timerState] = time;
        localStorage.setItem('times', JSON.stringify(times));
    }

    removeCurrentTime(timerState: TimerState) {
        const times = this.loadAllTimes();

        delete times[timerState];
        localStorage.setItem('times', JSON.stringify(times));
    }
}
