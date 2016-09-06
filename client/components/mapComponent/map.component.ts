import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

//noinspection TypeScriptCheckImport
import template from "./map.component.html";

@Component({
    moduleId: module.id,
    selector: 'map-section',
    template: template
})
export class MapComponent {
    items: FirebaseListObservable<any>;

    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor(af: AngularFire) {
        this.items = af.database.list('/online');

    }

}