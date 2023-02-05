import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IActionButton } from 'src/app/model/button.model';
import { IPasien } from 'src/app/model/pasien.model';
import * as fromActions from '../../../store/action/pasien.action';

@Component({
    selector: 'app-detail-data-pasien',
    templateUrl: './detail-data-pasien.component.html',
    styleUrls: ['./detail-data-pasien.component.css']
})
export class DetailDataPasienComponent implements OnInit {

    // ** Action Button Component Attributes
    ActionButtons: IActionButton[];

    // ** Data Pasien
    Pasien: IPasien;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<{ pasien: any }>
    ) {
        // ** Get Current Store 
        this.onGetCurrentStore();

        // ** Set Value 
        this.ActionButtons = [
            { id: 'back', caption: 'Back', icon: 'fa-chevron-left fa-sm' },
        ];
    }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params.id;
        this.onGetDataPasien(id);
    }

    onGetCurrentStore(): void {
        this.store.select('pasien')
            .subscribe((result) => {
                if (result.message == 'GET BY ID SUCCESS') {
                    this.Pasien = result.data;
                }
            })
    }

    onGetDataPasien(id: number): void {
        this.store.dispatch(fromActions.getByIdRequest({ payload: { id: id } }))
    }

    handleClickActionButton(id: string): void {
        switch (id) {
            case 'back':
                this.router.navigateByUrl('pasien/list');
                break;
            default:
                break;
        }
    }
}
