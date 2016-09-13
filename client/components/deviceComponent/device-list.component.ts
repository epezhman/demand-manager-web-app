import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

//noinspection TypeScriptCheckImport
import template from "./device-list.component.html";
import {Device} from "../../../lib/interfaces/device.interface";


@Component({
    moduleId: module.id,
    selector: 'device-list',
    template: template,
})
export class DeviceListComponent implements OnInit {
    devices: FirebaseListObservable<Device[]>;
    isLoading: boolean = true;

    constructor(private af: AngularFire) {

    }

    ngOnInit(): void {
        this.devices = this.af.database.list('/online');
        this.devices.first().subscribe(() => this.isLoading = false);
    }


    onlineStatus(device: Device): string {
        if (!device)
            return '';
        if(device.connections)
            return '<div class="online-status online" data-toggle="tooltip" title="Online"></div>';
        return '<div class="online-status offline" data-toggle="tooltip" title="Offline"></div>';

    }

}