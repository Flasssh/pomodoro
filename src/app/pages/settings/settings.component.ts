import {Component} from '@angular/core';
import {SettingsUrl} from "../../shared/models/settings";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

    settings: SettingsUrl[] = [
        {
            name: 'Timer',
            icon: 'heroClock',
            url: 'timer',
            disabled: false,
        },
        {
            name: 'Notification',
            icon: 'heroBell',
            url: 'notification',
            disabled: true,
            soon: true,
        },
        {
            name: 'Controls',
            icon: 'heroCog6Tooth',
            url: 'control',
            disabled: true,
            soon: true,
        },
    ]
}
