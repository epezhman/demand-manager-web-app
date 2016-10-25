import {Component, Input} from "@angular/core";
import {DeviceDetail} from "../../../lib/interfaces/device.interface";
import * as _ from "lodash";
import "geolib";

//noinspection TypeScriptCheckImport
import template from "./map-device.component.html";


@Component({
    moduleId: module.id,
    selector: 'map-device',
    template: template,
    styles: ['.sebm-google-map-container {height: 300px;}']
})
export class MapDeviceComponent {
    latMunich: number = 48.139;
    lngMunich: number = 11.566;
    zoomMunich: number = 10;

    locationsData: Array<any> = [];

    @Input()
    set mapDevice(mapDevice: DeviceDetail) {
        this.locationsData = _.values(mapDevice);
    }

}