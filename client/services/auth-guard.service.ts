import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Meteor} from "meteor/meteor";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(), 'admin'))
            return true;

        this.router.navigate(['']);
        return false;
    }
}
