import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Device} from "../../../lib/interfaces/device.interface";

import {series} from 'async';

//noinspection TypeScriptCheckImport
import template from "./firebase.component.html";
import {NotificationsService} from "angular2-notifications";


@Component({
    moduleId: module.id,
    selector: 'firebase-section',
    template: template
})
export class FirebaseComponent {
    devices: FirebaseListObservable<Device[]>;
    isLoading: boolean = false;

    removeDeviceId: string;

    notifOptions = {
        timeOut: 5000,
    };

    constructor(private af: AngularFire, private notif: NotificationsService) {

    }

    removeDevice(): void {

        if (confirm('Are you Sure?')) {

            series([
                    (cb)=> {
                        const deviceObservable = this.af.database.object(`/devices/${this.removeDeviceId}`);
                        deviceObservable.remove().then(()=> {
                            cb(null);
                        });
                    },
                    (cb)=> {
                        const onlineObservable = this.af.database.object(`/online/${this.removeDeviceId}`);
                        onlineObservable.remove().then(()=> {
                            cb(null);
                        });
                    },
                    (cb)=> {
                        const countObservable = this.af.database.object(`/statistics/`);
                        const countSubscription = countObservable.subscribe(data=> {
                            countSubscription.unsubscribe();
                            countObservable.update({
                                'devices-count': data['devices-count'] - 1
                            }).then(()=>{
                                cb(null);
                            });
                        })
                    }
                ],
                (err, results) => {
                    this.notif.success(
                        'Success',
                        'Device is removed.'
                    );
                });
        }
    }

}