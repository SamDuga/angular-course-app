import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConferenceEvent, EventSession } from 'src/app/common/dataModels';
import EventService from '../services/events.service';

@Component( {
    templateUrl: './event-details.component.html',
    styles: [ `
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image {height: 100px;}
        a {cursor: pointer}
    `]
} )
export class EventDetailsComponent implements OnInit {
    event: ConferenceEvent;
    addSessionMode: boolean;
    filterBy = 'all';
    sortBy = 'votes';

    constructor( private eventService: EventService, private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.data.forEach( data => {
            this.event = data[ 'event' ];
            this.addSessionMode = false;
            this.filterBy = 'all';
            this.sortBy = 'votes';
        } );
    }

    addSession() {
        this.addSessionMode = true;
    }
    cancel() {
        this.addSessionMode = false;
    }

    saveNewSession( session: EventSession ) {
        const nextId = Math.max.apply( null, this.event.sessions.map( s => s.id ) );
        session.id = nextId + 1;
        this.event.sessions.push( session );
        this.eventService.saveEvent( this.event ).subscribe();
        this.addSessionMode = false;
    }


}
