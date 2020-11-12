import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceEvent, EventSession } from 'src/app/common/dataModels';
import EventService from '../services/events.service';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image {height: 100px;}
        a {cursor: pointer}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: ConferenceEvent;
    eventId: number;
    addSessionMode: boolean;

    constructor(private eventService: EventService, private route: ActivatedRoute) {
        this.eventId = +this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(this.eventId);
    }

    addSession() {
        this.addSessionMode = true;
    }
    cancel() {
        this.addSessionMode = false;
    }

    saveNewSession(session: EventSession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addSessionMode = false;
    }
}
