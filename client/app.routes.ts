import {Routes, RouterModule} from "@angular/router";
import {MapComponent} from "./components/mapComponent/map.component";
import {WelcomeComponent} from "./components/welcomeComponent/welcome.component";

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'map', component: MapComponent}
];

export const routing = RouterModule.forRoot(routes);
