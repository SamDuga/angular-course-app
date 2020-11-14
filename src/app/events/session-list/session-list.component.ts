import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EventSession } from 'src/app/common/dataModels';
import { AuthService } from 'src/app/user/services/auth.service';
import { VoterService } from '../services/voter.service';

@Component( {
    selector: 'session-list',
    templateUrl: './session-list.component.html'
} )

export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions: EventSession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    filiteredSessions: EventSession[] = [];

    constructor( public authService: AuthService, private voterService: VoterService ) { }

    ngOnInit() { }

    ngOnChanges() {
        if ( this.sessions ) {
            this.filterSessions( this.filterBy );
            this.sortSessions( this.sortBy );
        }
    }

    filterSessions( filterBy: string ) {
        if ( filterBy === 'all' ) { this.filiteredSessions = this.sessions.slice( 0 ); } else {
            this.filiteredSessions = this.sessions.filter( session => {
                return session.level.toLocaleLowerCase() === filterBy;
            } );
        }
    }

    sortSessions( sortBy: string ) {
        if ( sortBy === 'name' ) {
            this.filiteredSessions = this.filiteredSessions.sort( ( s1, s2 ) => {
                if ( s1.name > s2.name ) { return 1; } else if ( s1.name === s2.name ) { return 0; } else { return -1; }
            } );
        } else if ( sortBy === 'votes' ) {
            this.filiteredSessions = this.filiteredSessions.sort( ( s1, s2 ) => {
                return s2.voters.length - s1.voters.length;
            } );
        }
    }

    toggleVote( session: EventSession ) {
        if ( this.userHasVoted( session ) ) {
            this.voterService.deleteVoter( session, this.authService.currentUser.userName, this.eventId );
        } else {
            this.voterService.addVoter( session, this.authService.currentUser.userName, this.eventId );
        }

        if ( this.sortBy === 'votes' ) { this.sortSessions( 'votes' ); }
    }

    userHasVoted( session ): boolean {
        return this.voterService.userHasVoted( session, this.authService.currentUser.userName );
    }
}
