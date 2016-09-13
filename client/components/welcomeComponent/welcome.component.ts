import {Component} from '@angular/core';

//noinspection TypeScriptCheckImport
import template from "./welcome.component.html";
import {MeteorComponent} from "angular2-meteor";
import {InjectUser} from "angular2-meteor-accounts-ui";


@Component({
    selector: 'welcome-section',
    template: template,
})
@InjectUser('user')
export class WelcomeComponent extends MeteorComponent {
    user: Meteor.User;

    constructor() {
        super();
    }

    isAdmin(): boolean {
        if (this.user && Roles.userIsInRole(Meteor.user(), 'admin'))
            return true;
        else if (this.user)
            return false;
        return true
    }

}