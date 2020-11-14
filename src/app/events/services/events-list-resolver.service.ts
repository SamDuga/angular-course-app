import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ConferenceEvent } from 'src/app/common/dataModels';
import EventService from './events.service';

@Injectable()
export class EventListResolver implements Resolve<ConferenceEvent[]> {
    constructor( private eventService: EventService ) { }

    resolve(): Observable<Array<ConferenceEvent>> {
        return this.eventService.getEvents();
    }
}
