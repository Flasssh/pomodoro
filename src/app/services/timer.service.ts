import {Injectable} from '@angular/core';
import {TasksService} from "./tasks.service";

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
}
