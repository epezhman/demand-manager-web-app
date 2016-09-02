import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

//noinspection TypeScriptCheckImport
import template from "./map.component.html";

//noinspection TypeScriptUnresolvedVariable
@Component({
    moduleId: module.id,
    selector: 'map-section',
    template: template,
})
export class MapComponent {
    items: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.items = af.database.list('devices');
    }
}