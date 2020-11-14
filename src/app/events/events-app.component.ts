import { Component, OnInit } from '@angular/core';
import { ConferenceEvent } from '../common/dataModels';
import { AuthService } from '../user/services/auth.service';
import EventService from './services/events.service';

@Component( {
    selector: 'events-app',
    template: `
    <nav-bar [events]="events"></nav-bar>
    <router-outlet></router-outlet>
  `
} )
export class EventsAppComponent implements OnInit {
    events: Array<ConferenceEvent>;
    title = 'app';

    constructor( private authService: AuthService, private eventService: EventService ) { }

    ngOnInit() {
        this.authService.checkAuthenticationStatus();

        this.eventService.getEvents().subscribe( events => {
            this.events = events;
        } );
    }
}
