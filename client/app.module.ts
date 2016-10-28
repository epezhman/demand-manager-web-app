'use strict';

import {NgModule, enableProdMode} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {routing, appRoutingProviders} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MeteorModule} from "angular2-meteor";
import {LoginButtons} from "angular2-meteor-accounts-ui";
import {AngularFireModule, WindowLocation} from "angularfire2";
import {AppComponent} from "./app.component";
import {WelcomeComponent} from "./components/welcomeComponent/welcome.component";
import {MapComponent} from "./components/mapComponent/map.component";
import {AgmCoreModule, provideLazyMapsAPILoaderConfig} from "angular2-google-maps/core";
import {DeviceListComponent} from "./components/deviceComponent/device-list.component";
import {UserComponent} from "./components/userComponent/user.component";
import {NotFoundComponent} from "./components/notFoundComponent/notfound.component";
import "../lib/methods/users.methods";
import {DeviceStatusPipe} from "./pipes/device-status.pipe";
import {DeviceDetailComponent} from "./components/deviceComponent/device-detail.component";
import {Ng2PaginationModule} from "ng2-pagination";
import {StringFilterPipe} from "./pipes/string-filter.pipe";
import {LocationFilterPipe} from "./pipes/location-filter.pipe";
import {StrictAuthGuard} from "./services/string-auth-guard.service";
import {AuthGuard} from "./services/auth-guard.service";
import {FirebaseComponent} from "./components/firebaseComponent/firebase.component";
import {SimpleNotificationsModule} from "angular2-notifications";
import {PowerChartDeviceComponent} from "./components/chartComponent/power-chart-device.component";
import {CHART_DIRECTIVES} from "ng2-charts/ng2-charts";
import {MapDeviceComponent} from "./components/mapComponent/map-device.component";
import {PowerChartDeviceSumComponent} from "./components/chartComponent/power-chart-device-sum.component";
import {MapDevicesSumComponent} from "./components/mapComponent/map-device-sum.component";

if (Meteor.isProduction) {
    enableProdMode();
}

export const firebaseConfig = {
    apiKey: "AIzaSyAtWT98dejyLr9BQXkmxiTHbBtbKQ1ObnY",
    authDomain: "tum-dm-fireb.firebaseapp.com",
    databaseURL: "https://tum-dm-fireb.firebaseio.com",
    storageBucket: "tum-dm-fireb.appspot.com",
};


@NgModule({
    imports: [BrowserModule,
        routing,
        MeteorModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        Ng2PaginationModule,
        AgmCoreModule.forRoot(),
        SimpleNotificationsModule,
    ],
    declarations: [AppComponent,
        WelcomeComponent,
        NotFoundComponent,
        MapComponent,
        LoginButtons,
        DeviceListComponent,
        UserComponent,
        DeviceStatusPipe,
        DeviceDetailComponent,
        StringFilterPipe,
        LocationFilterPipe,
        FirebaseComponent,
        PowerChartDeviceComponent,
        MapDeviceComponent,
        PowerChartDeviceSumComponent,
        MapDevicesSumComponent,
        CHART_DIRECTIVES,
    ],
    bootstrap: [AppComponent],
    providers: [
        StrictAuthGuard,
        AuthGuard,
        appRoutingProviders,
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
