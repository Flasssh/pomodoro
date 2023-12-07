import {Component} from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

    settingsUrl = [
        {
            name: 'Timer',
            icon: 'heroClock',
            url: 'timer',
        },
        {
            name: 'Notification',
            icon: 'heroBell',
            url: 'notification',
        },
        {
            name: 'Control',
            icon: 'heroCog6Tooth',
            url: 'control',
        },
    ]
}
