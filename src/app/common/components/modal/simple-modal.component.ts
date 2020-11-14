import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQUERY_TOKEN } from '../../services/jquery.service';

@Component( {
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styles: [ `
        .modal-body {height: 250px; overflow-y: scroll;}
    `]
} )

export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild( 'modalContainer' ) containerEl: ElementRef;

    constructor( @Inject( JQUERY_TOKEN ) private $: any ) { }

    ngOnInit() { }

    closeModal() {
        if ( this.closeOnBodyClick.toLocaleLowerCase() === 'true' ) { this.$( this.containerEl.nativeElement ).modal( 'hide' ); }
    }
}
