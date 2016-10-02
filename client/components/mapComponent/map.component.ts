import {Component, OnInit} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Device} from "../../../lib/interfaces/device.interface";
import * as _ from "lodash";
//noinspection TypeScriptCheckImport
import template from "./map.component.html";


@Component({
    moduleId: module.id,
    selector: 'map-section',
    template: template
})
export class MapComponent implements OnInit {
    devices: FirebaseListObservable<Device[]>;
    devicesObservable: FirebaseListObservable<Device[]>;
    devices: Device[] = [];
    isLoading: boolean = true;
    selectedDevices: string[] = [];

    latMunich: number = 48.139;
    lngMunich: number = 11.566;
    zoomMunich: number = 11;

    latCircle: number = 48.139;
    lngCircle: number = 11.566;
    radiusCircle: number = 1000;
    colorCircle: string = "blue";
    strokeColorCircle: string = "blue";


    constructor(private af: AngularFire) {
    }

    ngOnInit(): void {
        this.devicesObservable = this.af.database.list('/online');
        this.devicesObservable.subscribe((devicesData)=> {
            this.devices = devicesData;
            this.isLoading = false
        });
    }

    clickedMarker(deviceId: string) {
        if (this.selectedDevices.indexOf(deviceId) < 0) {
            this.selectedDevices.push(deviceId);
        }
        else {
            _.pull(this.selectedDevices, deviceId);
        }
    }

    radiusChange(radius: number) {
        this.radiusCircle = radius;
    }

    centerChange(center) {
        this.latCircle = center['lat'];
        this.lngCircle = center['lng'];
    }

    onlineStatus(device: Device): string {
        if (!device)
            return '';
        if (device.connections)
            return '/images/green-dot.png';
        return '/images/red-dot.png';

    }

    loadingDeviceDetail(loading: boolean): void {
        this.isLoading = loading;
    }


}