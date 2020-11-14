import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceEvent } from 'src/app/common/dataModels';

@Component( {
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail
                        [event]="event"
                    ></event-thumbnail>
                </div>
            </div>
        </div>
    `,
} )
export class EventsListComponent implements OnInit {
    events: ConferenceEvent[];

    constructor( private route: ActivatedRoute ) { }

    ngOnInit() {
        this.events = this.route.snapshot.data[ 'events' ];
    }
}
