import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";

//noinspection TypeScriptCheckImport
import template from "./map.component.html";


@Component({
    moduleId: module.id,
    selector: 'map-section',
    template: template
})
export class MapComponent {
    devices: FirebaseListObservable<any>;
    isLoading: boolean = true;
    lat_munich: number = 48.139;
    lng_munich: number = 11.566;
    zoom_munich: number = 11;

    constructor(af: AngularFire) {
        this.devices = af.database.list('/online');
        this.devices.first().subscribe(() => this.isLoading = false);

    }

}