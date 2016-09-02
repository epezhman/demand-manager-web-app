'use strict';

import {NgModule, enableProdMode} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MeteorModule} from "angular2-meteor";
import {AppComponent} from "./app.component";
import {NavComponent} from "./components/navComponent/nav.component";
import {WelcomeComponent} from "./components/welcomeComponent/welcome.component";
import {MapComponent} from "./components/mapComponent/map.component";


enableProdMode();

@NgModule({
    imports: [BrowserModule, routing, MeteorModule, FormsModule],
    declarations: [AppComponent, NavComponent, WelcomeComponent, MapComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
