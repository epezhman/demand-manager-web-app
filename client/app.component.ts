'use strict';

import {Component} from "@angular/core";
//noinspection TypeScriptCheckImport
import template from "./app.component.html";
import {InjectUser} from "angular2-meteor-accounts-ui";
import {MeteorComponent} from "angular2-meteor";


@Component({
    selector: 'app',
    template: template
})
@InjectUser('user')
export class AppComponent extends MeteorComponent {
    user: Meteor.User;

    constructor() {
        super();
    }

    isAdmin(): boolean {
        return Roles.userIsInRole(Meteor.user(), 'admin');
    }

}
