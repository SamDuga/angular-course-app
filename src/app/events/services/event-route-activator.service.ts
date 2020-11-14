import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import EventService from './events.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const eventExists: boolean = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExists) { this.router.navigate(['/404']); }

        return eventExists;
    }
}
