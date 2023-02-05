import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { IKanbanBoard } from 'src/app/model/kanban-board.model';

@Component({
    selector: 'app-kanban-board',
    templateUrl: './kanban-board.component.html',
    styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {

    @Input('data') data: IKanbanBoard;

    constructor() { }

    ngOnInit(): void {
    }

    handleCdkDrop(args: CdkDragDrop<string[]>): void {
        if (args.previousContainer == args.container) {
            moveItemInArray(args.container.data, args.previousIndex, args.currentIndex);
        } else {
            transferArrayItem(args.previousContainer.data, args.container.data, args.previousIndex, args.currentIndex);
        }
    }
}
