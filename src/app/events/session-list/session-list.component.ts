import { Component, Input, OnInit } from '@angular/core';
import { EventSession } from 'src/app/common/dataModels';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnInit {
    @Input() sessions: Array<EventSession>;
    constructor() { }

    ngOnInit() { }
}
