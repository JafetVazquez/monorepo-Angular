import { Injectable, APP_INITIALIZER, NgModule }  from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { NgxPermissionsService, NgxRolesService } from "ngx-permissions";
 
@Injectable()
export class AppInitService {
    decodedToken: any;
 
    constructor(private rolesService: NgxRolesService, private permissionsService: NgxPermissionsService) {
    }
    
    load(){
        this.rolesService.addRole(this.decodedToken.roles[0], this.decodedToken.permissions);
        this.permissionsService.addPermission(this.decodedToken.permissions);
    }

    Init() {
 
        return new Promise<void>((resolve, reject) => {
            console.log("AppInitService.init() called");
            ////do your initialisation stuff here  
            setTimeout(() => {
                console.log('AppInitService Finished');
                resolve();
            }, 1000);
 
        });
    }
}