import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../shared/services/tasks.service";
import {map, Observable} from "rxjs";
import {Task} from "./models/Task";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

    creatingTask = false;
    filterCompleted = false;

    currentTaskOpen$?: Observable<Task | undefined>;
    tasks$!: Observable<Task[]>

    constructor(
        private readonly tasksService: TasksService,
    ) {
    }

    ngOnInit(): void {
        this.tasks$ = this.tasksService.getTasks$();
    }

    createTask($event: Task) {
        this.tasksService.createTask$($event);
        this.creatingTask = false;
    }

    deleteTask(id: number) {
        this.tasksService.deleteTask$(id);
    }

    cancelCreatingTask() {
        this.creatingTask = false;
    }

    startCreatingTask() {
        this.creatingTask = true;
    }

    openTask(taskId: number) {
        this.currentTaskOpen$ = this.tasksService.findTask$(taskId);
    }

    closeModal() {
        this.currentTaskOpen$ = undefined;
    }

    completeTask($event: number) {
        this.tasksService.completeTask$($event);
    }

    resetIterationTask($event: number) {
        this.tasksService.resetIterationTask$($event);
    }

    filterCompletedTask() {
        if (this.filterCompleted) {
            this.filterCompleted = false;
            this.tasks$ = this.tasksService.getTasks$();
        } else {
            this.filterCompleted = true;
            this.tasks$ = this.tasksService.getTasks$()
                .pipe(
                    map(tasks => tasks.filter(task => !task.completed))
                );
        }

        this.tasks$.subscribe();
    }
}
