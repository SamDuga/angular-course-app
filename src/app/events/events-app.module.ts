import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Error404Component } from '../common/components/404/404.component';
import { CollapsibleWellComponent } from '../common/components/collapsible-well/collapsible-well.component';
import { ModalTriggerDirective } from '../common/components/modal/modalTrigger.directive';
import { SimpleModalComponent } from '../common/components/modal/simple-modal.component';
import { NavBarComponent } from '../common/components/navbar/nav-bar.component';
import { DurationPipe } from '../common/services/duration.pipe';
import { JQUERY_TOKEN } from '../common/services/jquery.service';
import { Toastr, TOASTR_TOKEN } from '../common/services/toastr.service';
import { AuthService } from '../user/services/auth.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { ValidateLocationDirective } from './create-event/validateLocation.directive';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { AppRoutes } from './routes';
import { EventRouteActivator } from './services/event-route-activator.service';
import { EventListResolver } from './services/events-list-resolver.service';
import EventService from './services/events.service';
import { VoterService } from './services/voter.service';
import { SessionListComponent } from './session-list/session-list.component';
import { VotingComponent } from './session-list/voting/voting.component';

const toastr: Toastr = window[ 'toastr' ];
const jquery = window[ '$' ];

@NgModule( {
    imports: [
        BrowserModule,
        RouterModule.forRoot( AppRoutes ),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        VotingComponent,
        ValidateLocationDirective
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQUERY_TOKEN,
            useValue: jquery
        },
        EventRouteActivator,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: ( component: CreateEventComponent ) => {
                if ( component.isDirty ) { return window.confirm( 'You have not yet saved this event. Cancel?' ); }
            }
        },
        AuthService,
        VoterService
    ],
    bootstrap: [ EventsAppComponent ]
} )
export class AppModule { }
