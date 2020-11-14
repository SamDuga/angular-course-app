import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {map} from 'rxjs/operators';
import { ConferenceEvent } from 'src/app/common/dataModels';
import EventService from './events.service';

 @Injectable()
 export class EventListResolver implements Resolve<ConferenceEvent[]> {
     constructor(private eventService: EventService) { }

     resolve() {
        return this.eventService.getEvents().pipe(
            map(events => events)
        );
     }
 }
