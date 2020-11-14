import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ConferenceEvent } from 'src/app/common/dataModels';
import EventService from './events.service';

@Injectable()
export class EventResolver implements Resolve<ConferenceEvent> {
    constructor( private eventService: EventService ) { }

    resolve( route: ActivatedRouteSnapshot ): Observable<ConferenceEvent> {
        return this.eventService.getEvent( route.params[ 'id' ] );
    }
}
