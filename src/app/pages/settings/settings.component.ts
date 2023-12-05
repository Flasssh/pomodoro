import {Component} from '@angular/core';
import {SettingsService} from "../../services/settings.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

    constructor(
        private readonly settingsService: SettingsService
    ) {
    }

    settings = [
        {
            name: 'Timer',
            icon: 'heroClock',
            url: 'timer',
        }
    ]
}
