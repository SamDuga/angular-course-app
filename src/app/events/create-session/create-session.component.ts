import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { EventSession } from 'src/app/common/dataModels';

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px;}
        .error input, .error select, .error textarea {background-color: #E3C3C5}
    `]
})

export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    constructor() { }

    private restrictedWordsValidator(control: FormControl) : {[key: string]: any} {
        return control.value.includes('foo')
        ?   {'restrictedWords': 'foo'}
        : null
    }

    ngOnInit() {
         this.name = new FormControl('', Validators.required);
         this.presenter = new FormControl('', Validators.required);
         this.duration = new FormControl('', Validators.required);
         this.level = new FormControl('', Validators.required);
         this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWordsValidator]);

         this.newSessionForm = new FormGroup({
             name: this.name,
             presenter: this.presenter,
             duration: this.duration,
             level: this.level,
             abstract: this.abstract
         })
    }

    saveSession(formValues) {
        let session: EventSession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
    }
}
