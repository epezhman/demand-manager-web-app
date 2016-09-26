import {Component, Input, Output, EventEmitter, DoCheck} from "@angular/core";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {DeviceDetail, Device} from "../../../lib/interfaces/device.interface";
import * as _ from 'lodash';

//noinspection TypeScriptCheckImport
import template from "./device-detail.component.html";

@Component({
    moduleId: module.id,
    selector: 'device-detail',
    template: template,
})
export class DeviceDetailComponent implements DoCheck {
    @Input() inputDevices: string[];
    oldDevices: string[];
    oldLength = 0;

    devicesObserver: any = {};
    devices: any = {};
    @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private af: AngularFire) {

    }


    ngDoCheck() {
        let newLength = this.inputDevices.length;
        if (this.oldLength !== newLength) {
            this.oldLength = newLength;
            this.observeDevices();
        }
    }

    observeDevices() {
        let devicesToAdd = _.difference(this.inputDevices, this.oldDevices);
        let devicesToRemove = _.difference(this.oldDevices, this.inputDevices);
        for (let newDevice of devicesToAdd) {
            this.devices[newDevice] = newDevice;
            this.devicesObserver[newDevice] = this.af.database.object('/devices/' + newDevice);
            this.devicesObserver[newDevice].subscribe((deviceData) => {
                this.devices[newDevice] = deviceData;
            });
        }
        for (let oldDevice of devicesToRemove) {
            delete this.devicesObserver[oldDevice];
            delete this.devices[oldDevice];
        }
        this.oldDevices = _.cloneDeep(this.inputDevices);

    }

}