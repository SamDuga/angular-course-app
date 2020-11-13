import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component( {
    selector: 'voting',
    templateUrl: 'voting.component.html',
    styleUrls: [ './voting.component.css' ]
} )

export class VotingComponent implements OnInit {
    @Input() voteCount: number;
    @Input() hasVoted: boolean;
    @Output() vote = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.vote.emit();
    }
}
