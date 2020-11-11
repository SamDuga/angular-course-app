import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ConferenceEvent } from 'src/app/common/dataTypes';
import ToastrService from 'src/app/common/services/toastr.service';
import EventService from '../services/events.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail (click)="handleThumbnailClick(event?.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: Array<ConferenceEvent>;

  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
