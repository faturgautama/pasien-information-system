import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IActionButton } from 'src/app/model/button.model';

@Component({
    selector: 'app-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

    @Input('buttons') buttons!: IActionButton[];

    @Output('clicked') clicked = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClickButton(id: string): void {
        this.clicked.emit(id)
    }
}
