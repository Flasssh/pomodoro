import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DarkmodeService {

    darkMode = false;
    darkModeBehaviourSubject$ = new BehaviorSubject<boolean>(this.darkMode);

    constructor() {
        if (this.hasSavedDarkMode()) return;

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.darkMode = true;
            document.body.classList.add('dark');
        }
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;

        if (this.darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

        this.darkModeBehaviourSubject$.next(this.darkMode);
        this.saveDarkMode();
    }

    followDarkModeState$() {
        return this.darkModeBehaviourSubject$.asObservable();
    }

    saveDarkMode() {
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    }

    loadDarkMode() {
        this.darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
        this.darkModeBehaviourSubject$.next(this.darkMode);

        if (this.darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    private hasSavedDarkMode() {
        return localStorage.getItem('darkMode') !== null;
    }
}
