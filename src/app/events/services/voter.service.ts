import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventSession } from 'src/app/common/dataModels';

@Injectable()
export class VoterService {
    constructor( private http: HttpClient ) { }

    private handleError<T>( operation = 'operation', result?: T ) {
        return ( error: any ): Observable<T> => {
            console.error( error );
            return of( result as T );
        };
    }

    addVoter( session: EventSession, userName: string, eventId: number ) {
        if ( !session.voters.find( x => x === userName ) ) {
            session.voters.push( userName );

            const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
            const options = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
            this.http.post( url, {}, options )
                .pipe( catchError( this.handleError<EventSession>( 'addVoter', session ) ) )
                .subscribe();
        }
        else return;
    }
    deleteVoter( session: EventSession, userName: string, eventId: number ) {
        if ( session.voters.find( x => x === userName ) ) {
            session.voters = session.voters.filter( x => x !== userName );

            const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
            this.http.delete( url )
                .pipe( catchError( this.handleError<EventSession>( 'deleteVoter', session ) ) )
                .subscribe();
        } else { return; }
    }
    userHasVoted( session: EventSession, userName: string ): boolean {
        return session.voters.some( x => x === userName );
    }
}
