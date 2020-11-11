import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceEvent } from 'src/app/common/dataTypes';
import EventService from '../services/events.service';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image {height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: ConferenceEvent;
    eventId: number;

    constructor(private eventService: EventService, private route: ActivatedRoute) {
        this.eventId = +this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(this.eventId);
    }
}
