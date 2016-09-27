import {Routes, RouterModule} from "@angular/router";
import {MapComponent} from "./components/mapComponent/map.component";
import {WelcomeComponent} from "./components/welcomeComponent/welcome.component";
import {DeviceListComponent} from "./components/deviceComponent/device-list.component";
import {UserComponent} from "./components/userComponent/user.component";
import {NotFoundComponent} from "./components/notFoundComponent/notfound.component";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from "./services/auth-guard.service";
import {FirebaseComponent} from "./components/firebaseComponent/firebase.component";
import {StrictAuthGuard} from "./services/string-auth-guard.service";


const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'map', component: MapComponent, canActivate: [AuthGuard]},
    {path: 'devices', component: DeviceListComponent, canActivate: [AuthGuard]},
    {path: 'users', component: UserComponent, canActivate: [AuthGuard]},
    {path: 'firebase', component: FirebaseComponent, canActivate: [StrictAuthGuard]},
    {path: '**', component: NotFoundComponent, canActivate: [AuthGuard]}
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
