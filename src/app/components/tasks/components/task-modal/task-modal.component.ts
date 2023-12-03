import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../models/Task";

@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent {

    @Input() task!: Task;

    @Output() closeModal = new EventEmitter<void>();
    @Output() completeTask = new EventEmitter<number>();
    @Output() resetIterationTask = new EventEmitter<number>();

    closeModalEvent() {
        this.closeModal.emit();
    }

    completeTaskEvent() {
        this.completeTask.emit(this.task.id);
    }

    resetCompletedTask() {
        this.resetIterationTask.emit(this.task.id);
    }
}
