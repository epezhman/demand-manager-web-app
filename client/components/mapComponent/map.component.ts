import {Component, OnInit} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Device} from "../../../lib/interfaces/device.interface";
//noinspection TypeScriptCheckImport
import template from "./map.component.html";



@Component({
    moduleId: module.id,
    selector: 'map-section',
    template: template
})
export class MapComponent implements OnInit {
    devices: FirebaseListObservable<Device[]>;
    isLoading: boolean = true;
    lat_munich: number = 48.139;
    lng_munich: number = 11.566;
    zoom_munich: number = 11;

    constructor(private af: AngularFire) {


    }

    clickedMarker(label: string) {
        console.log(`clicked the marker: ${label}`)
    }

    ngOnInit(): void {
        this.devices = this.af.database.list('/online');
        this.devices.subscribe(() => this.isLoading = false);
    }


}