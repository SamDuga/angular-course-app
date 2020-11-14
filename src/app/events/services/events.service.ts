import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConferenceEvent, EventSession } from 'src/app/common/dataModels';

@Injectable()
export default class EventService {
    constructor( private http: HttpClient ) { }

    private handleError<T>( operation = 'operation', result?: T ) {
        return ( error: any ): Observable<T> => {
            console.error( error );
            return of( result as T );
        };
    }

    getEvents(): Observable<ConferenceEvent[]> {
        return this.http.get<Array<ConferenceEvent>>( '/api/events' )
            .pipe( catchError( this.handleError<Array<ConferenceEvent>>( 'getEvents', [] ) ) );
    }
    getEvent( id: number ): Observable<ConferenceEvent> {
        return this.http.get<ConferenceEvent>( `api/events/${id}` )
            .pipe( catchError( this.handleError<ConferenceEvent>( 'getEvent' ) ) );
    }
    saveEvent( event: ConferenceEvent ) {
        let options = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) };
        return this.http.post<ConferenceEvent>( '/api/events', event, options )
            .pipe( catchError( this.handleError<ConferenceEvent>( 'saveEvent' ) ) );
    }
    searchSessions( searchTerm: string ): Observable<Array<EventSession>> {
        return this.http.get<Array<EventSession>>( `api/sessions/search?search=${searchTerm}` )
            .pipe( catchError( this.handleError<Array<EventSession>>( 'searchSessions', [] ) ) );
    }
}


