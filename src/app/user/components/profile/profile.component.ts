import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../../../common/services/toastr.service';
import { AuthService } from '../../services/auth.service';

@Component( {
    templateUrl: './profile.component.html',
    styles: [ `
        em { float: right; color: #E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5}
    `]
} )
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    mouseOverSave: boolean;
    constructor( private authService: AuthService, private router: Router, @Inject( TOASTR_TOKEN ) private toastr: Toastr ) { }

    ngOnInit() {
        this.firstName = new FormControl( this.authService.currentUser.firstName, [ Validators.required, Validators.pattern( '[a-zA-Z].*' ) ] );
        this.lastName = new FormControl( this.authService.currentUser.lastName, [ Validators.required, Validators.pattern( '[a-zA-Z].*' ) ] );
        this.profileForm = new FormGroup( {
            firstName: this.firstName,
            lastName: this.lastName
        } );
    }

    saveProfile( formValues ) {
        if ( !this.profileForm.valid ) { return; }

        this.authService.updateCurrentUser( formValues.firstName, formValues.lastName ).subscribe( () => {
            this.toastr.success( 'Profile saved sucessfully!' );
        } );
    }

    cancel() {
        this.router.navigate( [ 'events' ] );
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.touched;
    }
    validateLastName() {
        return this.lastName.valid || this.lastName.touched;
    }

    logout() {
        this.authService.logout().subscribe( () => {
            this.router.navigate( [ '/user/login' ] );
        } );
    }
}
