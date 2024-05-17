import { Injectable } from "@angular/core";
import { AuthData } from "./auth-data.modal";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable()

export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();

    constructor(private router: Router){
    }

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()*10000).toString()
        }
        this.authSuccessfully();
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()*10000).toString()
        };
        this.authSuccessfully();
    }

    logout(){
        this.user = {
            email: "",
            userId: ""
        }
        this.authChange.next(false); 
        this.router.navigate(['/login']);
    }

    getUser(){
        return {...this.user};
    }

    isAuth(){
        return this.user.email != "" && this.user.userId != ""
    }

    private authSuccessfully(){
        this.authChange.next(true); 
        this.router.navigate(['/training']);
    }
}