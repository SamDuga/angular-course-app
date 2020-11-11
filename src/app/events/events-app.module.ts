import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component'
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component'
import { NavBarComponent } from '../common/components/navbar/nav-bar.component'
import EventService from './services/events.service';
import ToastrService from '../common/services/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from '../common/components/404/404.component';
import { EventRouteActivator } from './services/event-route-activator.service';
import { EventListResolver } from './services/events-list-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
      EventService,
      ToastrService,
      EventRouteActivator,
      EventListResolver,
      {
          provide: 'canDeactivateCreateEvent',
          useValue: (component: CreateEventComponent) => {
              if (component.isDirty) return window.confirm('You have not yet saved this event. Cancel?')
          }
        }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
