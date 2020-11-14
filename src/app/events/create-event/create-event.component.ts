import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConferenceEvent } from 'src/app/common/dataModels';
import EventService from '../services/events.service';

@Component( {
    templateUrl: './create-event.component.html',
    styles: [ `
        em { float: right; color: #E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5}
    `]
} )
export class CreateEventComponent {
    newEvent: ConferenceEvent;
    isDirty = true;
    newEventForm: FormGroup;
    constructor( private router: Router, private eventService: EventService ) { }

    cancel() {
        this.router.navigate( [ '/events' ] );
    }
    saveEvent( formValues ) {
        this.eventService.saveEvent( formValues ).subscribe( () => {
            this.isDirty = false;
            this.router.navigate( [ '/events' ] );
        } );
    }
}
