import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {heroChartBar, heroCog} from "@ng-icons/heroicons/outline";
import { ChronoComponent } from './components/chrono/chrono.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChronoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        NgIconsModule.withIcons({ heroCog, heroChartBar }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
