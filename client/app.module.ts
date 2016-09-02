'use strict';

import {NgModule, enableProdMode} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MeteorModule} from "angular2-meteor";
import {LoginButtons} from 'angular2-meteor-accounts-ui'
import {AngularFireModule} from 'angularfire2';
import {AppComponent} from "./app.component";
import {NavComponent} from "./components/navComponent/nav.component";
import {WelcomeComponent} from "./components/welcomeComponent/welcome.component";
import {MapComponent} from "./components/mapComponent/map.component";


enableProdMode();

export const firebaseConfig = {
    apiKey: "AIzaSyAtWT98dejyLr9BQXkmxiTHbBtbKQ1ObnY",
    authDomain: "tum-dm-fireb.firebaseapp.com",
    databaseURL: "https://tum-dm-fireb.firebaseio.com",
    storageBucket: "tum-dm-fireb.appspot.com",
};

@NgModule({
    imports: [BrowserModule, routing, MeteorModule, FormsModule,
        AngularFireModule.initializeApp(firebaseConfig)],
    declarations: [AppComponent, NavComponent, WelcomeComponent,
        MapComponent, LoginButtons],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
