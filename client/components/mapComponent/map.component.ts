import {Component} from "@angular/core";
//import {AngularFire, FirebaseListObservable} from '../../angularfire/angularfire2';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

//noinspection TypeScriptCheckImport
import template from "./map.component.html";

//noinspection TypeScriptUnresolvedVariable
@Component({
    moduleId: module.id,
    selector: 'map-section',
    template: `
  <ul>
    <li *ngFor="let item of items | async">
      <input type="text" #updatetext [value]="item.text" />
      <button (click)="updateItem(item.$key, updatetext.value)">Update</button>
      <button (click)="deleteItem(item.$key)">Delete</button>
    </li>
  </ul>
  <input type="text" #newitem />
  <button (click)="addItem(newitem.value)">Add</button>
  <button (click)="deleteEverything()">Delete All</button>
  `
})
export class MapComponent {

    items: FirebaseListObservable<any>;
    constructor(af: AngularFire) {
        this.items = af.database.list('/messages');
    }
    addItem(newName: string) {
        this.items.push({ text: newName });
    }
    updateItem(key: string, newText: string) {
        this.items.update(key, { text: newText });
    }
    deleteItem(key: string) {
        this.items.remove(key);
    }
    deleteEverything() {
        this.items.remove();
    }
}