import {Component, OnInit} from '@angular/core';
import {DarkmodeService} from "../../shared/services/darkmode.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    mobileMenu = false;

    darkMode$!: Observable<boolean>;

    constructor(
        private readonly darkmodeService: DarkmodeService,
    ) {

    }

    ngOnInit(): void {
        this.darkMode$ = this.darkmodeService.followDarkModeState$();
    }

    toggleDarkMode() {
        this.darkmodeService.toggleDarkMode();
    }
}
