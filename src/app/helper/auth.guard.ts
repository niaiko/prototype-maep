import { AccountService } from './../services/account/account.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;
        if (user) {
            if (route.data.roles && route.data.roles.indexOf(user.roles[0]) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['login']);
                return false;
            }
            // authorised so return true
            return true;
        }
        console.log("not loged");
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}