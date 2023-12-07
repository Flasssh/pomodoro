import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../models/Task";
import {FormBuilder, Validators} from "@angular/forms";
import {TasksService} from "../../../../shared/services/tasks.service";

@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

    @Input() task!: Task;

    @Output() closeModal = new EventEmitter<void>();
    @Output() completeTask = new EventEmitter<number>();
    @Output() resetIterationTask = new EventEmitter<number>();

    taskForm: any;

    editMode = false;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly tasksService: TasksService
    ) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.taskForm = this.formBuilder.group({
            title: [this.task.title, [Validators.required, Validators.minLength(1)]],
            notes: [this.task.notes],
            iteration: [this.task.iteration, [Validators.required, Validators.min(1)]],
        });
    }

    closeModalEvent() {
        this.closeModal.emit();
    }

    completeTaskEvent() {
        this.completeTask.emit(this.task.id);
    }

    resetCompletedTask() {
        this.resetIterationTask.emit(this.task.id);
    }

    addIteration() {
        const currentIteration = this.iteration.value;
        this.iteration.setValue(currentIteration + 1);
    }

    removeIteration() {
        const currentIteration = this.iteration.value;
        if (currentIteration > 0) {
            this.iteration.setValue(currentIteration - 1);
        }
    }

    updateTaskEvent() {
        this.editMode = false;
        if (this.taskForm.valid) {
            this.task = {
                id: this.task.id,
                title: this.title.value,
                notes: this.notes.value,
                done: this.task.done,
                iteration: this.iteration.value,
                completed: this.task.completed,
            };

            this.tasksService.updateTask$(this.task);
        }
    }

    get title() {
        return this.taskForm.get('title');
    }

    get notes() {
        return this.taskForm.get('notes');
    }

    get iteration() {
        return this.taskForm.get('iteration');
    }
}
