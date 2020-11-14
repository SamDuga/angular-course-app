import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/common/dataModels';

@Injectable()
export class AuthService {
    currentUser: User;
    constructor( private http: HttpClient ) { }

    private handleError<T>( operation = 'operation', result?: T ) {
        return ( error: any ): Observable<T> => {
            console.error( error );
            return of( result as T );
        };
    }

    loginUser( userName: string, password: string ): Observable<any> {

        let loginInfo = { username: userName, password: password };
        let options = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };

        return this.http.post( '/api/login', loginInfo, options )
            .pipe( tap( data => {
                this.currentUser = <User> data[ 'user' ];
            } ) )
            .pipe( catchError( err => {
                return of( false );
            } ) );
    }

    logout() {
        this.currentUser = undefined;

        let options = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };

        return this.http.post( '/api/logout', {}, options );
    }

    updateCurrentUser( firstName: string, lastName: string ) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let options = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };

        return this.http.put( `/api/users/${this.currentUser.id}`, this.currentUser, options )
            .pipe( catchError( err => {
                return of( false );
            } ) );
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        this.http.get( '/api/currentIdentity' )
            .subscribe( data => {
                if ( data instanceof Object ) this.currentUser = <User> data;
            } );
    }
}
