import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h1>
            <hr>
            <div>
                <h3>[Create event form goes here]</h3>
                <br/>
                <br/>
                <button type='submit' class='btn btn-primary'>Save</button>
                <button type='button' class='btn btn-default' (click)="cancel()">Cancel</button>
            </div>
        </h1>
    `
})
export class CreateEventComponent {
    isDirty: boolean = true;
    constructor(private router: Router) {}
    cancel() {
        this.router.navigate(['/events']);
    }
}
