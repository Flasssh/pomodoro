import {Component} from '@angular/core';
import {Task} from "./models/Task";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

    tasks: Task[] = [
        {title: 'First task', completed: false},
        {title: 'Second task', completed: true},
    ];

    constructor() {
    }
}
