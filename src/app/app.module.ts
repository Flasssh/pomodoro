import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {heroChartBar, heroCog} from "@ng-icons/heroicons/outline";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
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
