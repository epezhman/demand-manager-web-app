///<reference path="../node_modules/angular2-google-maps/core/index.d.ts"/>
'use strict';

import {NgModule, enableProdMode} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MeteorModule} from "angular2-meteor";
import {LoginButtons} from "angular2-meteor-accounts-ui";
import {AngularFireModule, WindowLocation} from "angularfire2";
import {AppComponent} from "./app.component";
import {NavComponent} from "./components/navComponent/nav.component";
import {SpinnerComponent} from "./components/spinnerComponent/spinner.component";
import {WelcomeComponent} from "./components/welcomeComponent/welcome.component";
import {MapComponent} from "./components/mapComponent/map.component";
import {AgmCoreModule, provideLazyMapsAPILoaderConfig} from "angular2-google-maps/core";


enableProdMode();

export const firebaseConfig = {
    apiKey: "AIzaSyAtWT98dejyLr9BQXkmxiTHbBtbKQ1ObnY",
    authDomain: "tum-dm-fireb.firebaseapp.com",
    databaseURL: "https://tum-dm-fireb.firebaseio.com",
    storageBucket: "tum-dm-fireb.appspot.com",
};


@NgModule({
    imports: [BrowserModule, routing, MeteorModule, FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AgmCoreModule.forRoot()],
    declarations: [AppComponent, NavComponent, WelcomeComponent,
        MapComponent, LoginButtons, SpinnerComponent],
    bootstrap: [AppComponent],
    providers: [
        provideLazyMapsAPILoaderConfig({apiKey: 'AIzaSyCnrXBo3KQiqcLOGWxzPMrrZ3EIFlObow8'}),
        {
            provide: WindowLocation, useValue: {
            hash: '',
            search: '',
            pathname: '/',
            port: '',
            hostname: 'localhost',
            host: 'localhost',
            protocol: 'https',
            origin: 'localhost',
            href: 'https://localhost/'
        }
        }]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
