import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import EventService from './events.service';
import {map} from 'rxjs/operators';
import { ConferenceEvent } from 'src/app/common/dataModels';

 @Injectable()
 export class EventListResolver implements Resolve<Array<ConferenceEvent>> {
     constructor(private eventService: EventService) { }

     resolve() {
        return this.eventService.getEvents().pipe(
            map(events => events)
        )
     }
 }
