import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component( {
    templateUrl: './login.component.html',
    styles: [ `
        em { float: right; color: #E05C65; padding-left: 10px;}
    `]
} )

export class LoginComponent {
    userName: string;
    password: string;
    mouseOverLogin: boolean;
    invalidLogin: boolean = false;

    constructor( private authService: AuthService, private router: Router ) { }

    login( formValues ) {
        this.authService.loginUser( formValues.userName, formValues.password )
            .subscribe( response => {
                if ( !response ) {
                    this.invalidLogin = true;
                }
                else this.router.navigate( [ 'events' ] );
            } );
    }

    cancel() {
        this.router.navigate( [ 'events' ] );
    }
}
