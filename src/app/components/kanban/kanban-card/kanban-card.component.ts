import { Component, Input, OnInit } from '@angular/core';
import { IPasien } from 'src/app/model/pasien.model';
import { UtilityService } from 'src/app/service/utility/utility.service';

@Component({
    selector: 'app-kanban-card',
    templateUrl: './kanban-card.component.html',
    styleUrls: ['./kanban-card.component.css']
})
export class KanbanCardComponent implements OnInit {

    @Input('data') data: IPasien;

    BorderCardStyle: string = "";

    constructor(
        private utilityService: UtilityService,
    ) { }

    ngOnInit(): void {
        this.BorderCardStyle = "border-left: 0.25em solid " + this.utilityService.onGenerateCustomColor() + ";";
    }

}
