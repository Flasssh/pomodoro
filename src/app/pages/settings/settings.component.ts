import {Component} from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

    settings = [
        {
            name: 'Timer',
            icon: 'heroClock',
            url: 'timer',
        }
    ]
}
