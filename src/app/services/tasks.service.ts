import {Injectable} from '@angular/core';
import {Task} from "../components/tasks/models/Task";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    tasks: Task[] = [];

    constructor() {
    }

    getTasks$(): Observable<Task[]> {
        return of(this.tasks);
    }

    createTask$(task: Task): Task {
        task.id = this.tasks.length + 1;

        this.tasks.push(task);
        return task;
    }

    updateTask$(task: Task): Task {
        const index = this.tasks.findIndex(t => t.id === task.id);
        this.tasks[index] = task;
        return task;
    }

    deleteTask$(taskId: number): void {
        const index = this.tasks.findIndex(t => t.id === taskId);
        this.tasks.splice(index, 1);
    }
}
