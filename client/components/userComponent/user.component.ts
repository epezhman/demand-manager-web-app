import {Component, OnInit} from "@angular/core";
import {Meteor} from "meteor/meteor";
import {MeteorComponent} from "angular2-meteor";

//noinspection TypeScriptCheckImport
import template from "./user.component.html";

@Component({
    selector: 'user-section',
    template: template,
})
export class UserComponent extends MeteorComponent implements OnInit {

    users: Mongo.Cursor<Meteor.User>;

    constructor() {
        super();
    }

    ngOnInit() {
        this.subscribe('users-list', () => {
            this.users = Meteor.users.find({});
        }, true);
    }

    addAdmin(user: Meteor.User): void {
        if (confirm('Are you Sure?'))
            this.call('addUserToAdmin', user._id, (err)=> {
                if (err)
                    console.error(err);
            })
    }

    removeAdmin(user: Meteor.User): void {
        if (confirm('Are you Sure?'))
            this.call('removeUserFromAdmin', user._id, (err)=> {
                if (err)
                    console.error(err);
            })
    }

    isAdmin(user: Meteor.User): boolean {
        return Roles.userIsInRole(user, 'admin');
    }

    isAllowedToChangeAdmin(): boolean {
        return Roles.userIsInRole(Meteor.user(), 'admin');
    }

}