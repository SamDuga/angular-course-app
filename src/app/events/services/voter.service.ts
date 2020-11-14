import { Injectable } from '@angular/core';
import { EventSession } from 'src/app/common/dataModels';

@Injectable()
export class VoterService {
    constructor() { }

    addVoter( session: EventSession, userName: string ) {
        if ( !session.voters.find( x => x === userName ) ) { session.voters.push( userName ); } else { return; }
    }
    deleteVoter( session: EventSession, userName: string ) {
        if ( session.voters.find( x => x === userName ) ) {
            const voters = session.voters.filter( x => x !== userName );
            session.voters = voters;
        } else { return; }
    }
    userHasVoted( session: EventSession, userName: string ): boolean {
        return session.voters.some( x => x === userName );
    }
}
