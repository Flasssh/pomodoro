import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Task} from "../../models/Task";

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

    taskForm: any;

    @Output() cancelTask = new EventEmitter<void>();
    @Output() saveTask = new EventEmitter<Task>();

    constructor(
        private readonly formBuilder: FormBuilder,
    ) {

    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.taskForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(1)]],
            notes: [''],
            iteration: [0, [Validators.required, Validators.min(1)]],
        });
    }

    onSubmit() {
        if (this.taskForm.valid) {
            const task: Task = {
                id: 0,
                title: this.title.value,
                notes: this.notes.value,
                iteration: this.iteration.value,
                completed: false,
            };
            this.saveTask.emit(task);
        }
    }

    cancel() {
        this.cancelTask.emit();
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
