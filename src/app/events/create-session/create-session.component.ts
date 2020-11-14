import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { EventSession } from 'src/app/common/dataModels';
import * as CustomValidators from '../../common/validators';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px;}
        .error input, .error select, .error textarea {background-color: #E3C3C5}
    `]
})

export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddMode = new EventEmitter();
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    constructor() { }

    ngOnInit() {
         this.name = new FormControl('', Validators.required);
         this.presenter = new FormControl('', Validators.required);
         this.duration = new FormControl('', Validators.required);
         this.level = new FormControl('', Validators.required);
         this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), CustomValidators.restrictedWordsValidator(['foo', 'bar'])]);

         this.newSessionForm = new FormGroup({
             name: this.name,
             presenter: this.presenter,
             duration: this.duration,
             level: this.level,
             abstract: this.abstract
         });
    }

    saveSession(formValues) {
        const session: EventSession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    }
    cancel() {
        this.cancelAddMode.emit();
    }
}
