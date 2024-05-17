import { Injectable } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivateFn {
    constructor(private authService: AuthService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.authService.isAuth();
    }
}