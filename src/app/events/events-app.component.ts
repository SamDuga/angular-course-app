import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/services/auth.service';
import EventService from './services/events.service';

@Component( {
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
} )
export class EventsAppComponent implements OnInit {
    title = 'app';

    constructor( private authService: AuthService, private eventService: EventService ) { }

    ngOnInit() {
        this.authService.checkAuthenticationStatus();
    }
}
