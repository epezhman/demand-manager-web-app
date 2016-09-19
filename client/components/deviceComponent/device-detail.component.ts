import {Component, OnInit} from "@angular/core";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {DeviceDetail} from "../../../lib/interfaces/device.interface";
import {ActivatedRoute} from '@angular/router';

//noinspection TypeScriptCheckImport
import template from "./device-detail.component.html";

@Component({
    moduleId: module.id,
    selector: 'device-detail',
    template: template,
})
export class DeviceDetailComponent implements OnInit {
    deviceObserver: FirebaseObjectObservable<DeviceDetail>;
    device: DeviceDetail;
    isLoading: boolean = true;

    constructor(private af: AngularFire, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params
            .map(params => params['deviceId'])
            .subscribe(deviceId => {
                this.deviceObserver = this.af.database.object('/devices/' + deviceId);
                this.deviceObserver.subscribe((deviceData) => {
                    this.device = deviceData;
                    this.isLoading = false
                });
            });

    }

}