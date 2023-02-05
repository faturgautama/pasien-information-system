import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-validator',
    templateUrl: './form-validator.component.html',
    styleUrls: ['./form-validator.component.css']
})
export class FormValidatorComponent implements OnInit {

    @Input('show') show: boolean = false;

    @Input('caption') caption: string = "";

    constructor() { }

    ngOnInit(): void {
    }

}
