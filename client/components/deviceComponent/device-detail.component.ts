import {Component, Input, Output, EventEmitter, DoCheck, ApplicationRef} from "@angular/core";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import * as _ from "lodash";
import {DeviceDetail} from "../../../lib/interfaces/device.interface";

//noinspection TypeScriptCheckImport
import template from "./device-detail.component.html";

@Component({
    moduleId: module.id,
    selector: 'device-detail',
    template: template,

})
export class DeviceDetailComponent implements DoCheck {
    @Input() inputDevices: string[];
    @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

    oldDevices: string[];
    oldLength = 0;

    loadingObserver = {};
    devicesObserver = {};
    devicesSubscription = {};
    devices = {};

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
            this.initiateLoading(newDevice);
        }
        for (let oldDevice of devicesToRemove) {
            this.removeDeviceFromList(oldDevice);
        }
        this.oldDevices = _.cloneDeep(this.inputDevices);

    }

    checkIfLoadingShouldBeStopped() {
        if (_.every(_.values(this.loadingObserver), (v)=> !v))
            this.isLoading.emit(false);
    }

    initiateLoading(newDevice: string) {
        this.loadingObserver[newDevice] = true;
        this.isLoading.emit(true);
        this.devicesObserver[newDevice] = this.af.database.object('/devices/' + newDevice);
        this.devicesSubscription[newDevice] = this.devicesObserver[newDevice].subscribe((deviceData) => {
            this.devices[newDevice] = deviceData;
            this.loadingObserver[newDevice] = false;
            this.checkIfLoadingShouldBeStopped();
        });
    }

    removeDeviceFromList(oldDevice: string) {
        delete this.devicesObserver[oldDevice];
        delete this.devices[oldDevice];
        delete this.loadingObserver[oldDevice];
        this.devicesSubscription[oldDevice].unsubscribe();
        delete this.devicesSubscription[oldDevice];
        this.checkIfLoadingShouldBeStopped();
    }


    getDevicesCount(): number {
        return _.size(this.devices);
    }

    getDeviceObjectsAsList(): DeviceDetail[] {
        return _.values(this.devices);
    }

    toggleView(device: DeviceDetail): void {
        if (device.visible || typeof device.visible === 'undefined') {
            this.devices[device.$key].visible = false;
        }
        else {
            this.devices[device.$key].visible = true;
        }
    }

    isVisiblePanel(device: DeviceDetail): boolean {
        if (typeof device.visible === 'undefined')
            return true;
        return device.visible;
    }

    toggleAll(visiblity: boolean): void {

        for (let device of _.keys(this.devices)) {
            this.devices[device].visible = visiblity;
        }

    }


}