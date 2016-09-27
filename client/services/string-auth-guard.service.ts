import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Meteor} from "meteor/meteor";


@Injectable()
export class StrictAuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(), 'admin')
            && Meteor.user().emails[0].address === "epezhman@gmail.com")
            return true;

        this.router.navigate(['']);
        return false;
    }
}
