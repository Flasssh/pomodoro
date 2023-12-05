import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from "./pages/settings/settings.component";
import {HomeComponent} from "./pages/home/home.component";
import {TimerSettingsComponent} from "./pages/settings/components/timer-settings/timer-settings.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {
                path: 'timer',
                component: TimerSettingsComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
