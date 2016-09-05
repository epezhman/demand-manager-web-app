'use strict';

import {NgModule, enableProdMode} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MeteorModule} from "angular2-meteor";
import {AngularFireModule, WindowLocation} from "angularfire2";
import {AppComponent} from "./app.component";

enableProdMode();

export const firebaseConfig = {
    apiKey: " ",
    authDomain: " ",
    databaseURL: " ",
    storageBucket: " ",
};


@NgModule({
    imports: [BrowserModule, routing, MeteorModule, FormsModule,
        AngularFireModule.initializeApp(firebaseConfig)],
    declarations: [AppComponent,],
    bootstrap: [AppComponent],
    providers: [{
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
