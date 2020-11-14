import { Component, Input } from '@angular/core';
import EventService from 'src/app/events/services/events.service';
import { AuthService } from 'src/app/user/services/auth.service';
import { ConferenceEvent } from '../../dataModels';

@Component( {
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [
        `
            .nav.navbar-nav {
                font-size: 15px;
            }
            #searchForm {
                margin-right: 100px;
            }
            @media (max-width: 1200px) {
                #searchForm {
                    display: none;
                }
            }
            li > a.active {
                color: #f97924;
            }
        `,
    ],
} )
export class NavBarComponent {
    @Input() events: Array<ConferenceEvent>;
    searchTerm = '';

    foundSessions = [];
    constructor( public authService: AuthService, private eventService: EventService ) { }

    searchSessions( searchTerm: string ) {
        this.eventService.searchSessions( searchTerm ).subscribe( sessions => {
            this.foundSessions = sessions; console.log( this.foundSessions );
        } );
    }
}
