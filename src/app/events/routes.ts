import { Routes } from '@angular/router';
import { Error404Component } from 'src/app/common/components/404/404.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventResolver } from './services/event-resolver.service';
import { EventListResolver } from './services/events-list-resolver.service';

export const AppRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [ 'canDeactivateCreateEvent' ] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: '../user/user.module#UserModule' }
];
