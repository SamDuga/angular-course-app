import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceEvent } from 'src/app/common/dataModels';
import { Toastr, TOASTR_TOKEN } from 'src/app/common/services/toastr.service';
import EventService from '../services/events.service';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail
                        (click)="handleThumbnailClick(event?.name)"
                        [event]="event"
                    ></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})
export class EventsListComponent implements OnInit {
    events: ConferenceEvent[];

    constructor(
        private eventService: EventService,
        @Inject(TOASTR_TOKEN) private toastr: Toastr,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this.toastr.success(eventName);
    }
}
