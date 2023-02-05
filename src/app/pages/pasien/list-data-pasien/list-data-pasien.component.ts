import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { IActionButton } from 'src/app/model/button.model';
import { IGrid } from 'src/app/model/grid.model';
import { IPasien } from 'src/app/model/pasien.model';
import { UtilityService } from 'src/app/service/utility/utility.service';
import * as fromActions from '../../../store/action/pasien.action';

@Component({
    selector: 'app-list-data-pasien',
    templateUrl: './list-data-pasien.component.html',
    styleUrls: ['./list-data-pasien.component.css']
})
export class ListDataPasienComponent implements OnInit {

    // ** Action Button Component Attributes
    ActionButtons: IActionButton[];

    // ** Grid Component Attributes
    @ViewChild('GridPasien') GridPasien!: GridComponent;
    GridAttributes!: IGrid;
    GridSelectedData!: IPasien;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private store: Store<{ pasien: any }>,
    ) {
        // ** Get Current Store 
        this.onGetCurrentStore();

        // ** Set Value 
        this.ActionButtons = [
            { id: 'add', caption: 'Add', icon: 'fa-plus fa-sm' },
            { id: 'detail', caption: 'Detail', icon: 'fa-info fa-sm' },
            { id: 'edit', caption: 'Edit', icon: 'fa-pen-to-square fa-sm' },
            { id: 'delete', caption: 'Delete', icon: 'fa-trash-alt fa-sm' },
        ];

        this.GridAttributes = {
            column: [
                { field: 'id', headerName: 'ID PASIEN', hide: true },
                { field: 'no_rekam_medis', headerName: 'NO. REKAM MEDIS', },
                { field: 'nama_lengkap', headerName: 'NAMA LENGKAP', },
                { field: 'alamat_lengkap', headerName: 'ALAMAT LENGKAP', },
                { field: 'kota', headerName: 'KOTA', },
                { field: 'usia', headerName: 'USIA', },
                { field: 'tanggal_lahir', headerName: 'TGL. LAHIR', cellRenderer: (data: any) => { return formatDate(data.value, 'dd/MM/yyyy', 'EN') } },
                { field: 'tempat_lahir', headerName: 'TEMPAT LAHIR' },
                { field: 'gender', headerName: 'GENDER', },
                { field: 'waktu_entry', headerName: 'WAKTU ENTRY', cellRenderer: (data: any) => { return formatDate(data.value, 'dd/MM/yyyy', 'EN') } },
                { field: 'is_active', headerName: 'STATUS ACTIVE', headerClass: 'text-center', cellClass: 'text-center', cellRenderer: (data: any) => { return data.value ? `<i class="fa-solid fa-check"></i>` : `<i class="fa-solid fa-xmark"></i>` } },
            ],
            dataSource: []
        }
    }

    ngOnInit(): void {
        this.onGetDataPasien();
    }

    onGetCurrentStore(): void {
        this.store.select('pasien')
            .subscribe((result) => {
                switch (result.message) {
                    case 'GET SUCCESS':
                        if (this.GridAttributes) {
                            this.GridAttributes.dataSource = result.data;
                        }
                        break;
                    case 'DELETE REQUEST SUCCESS':
                        this.utilityService.onShowCustomAlert('success', 'Success', 'Data Berhasil Dihapus')
                            .then(() => {
                                this.onGetDataPasien();
                            });
                        break;
                    default:
                        break;
                }
            })
    }

    onGetDataPasien(): void {
        this.store.dispatch(fromActions.getAllRequest());
    }

    handleClickActionButton(id: string): void {
        switch (id) {
            case 'add':
                this.router.navigateByUrl('pasien/add');
                break;
            case 'detail':
                if (this.GridSelectedData) {
                    this.router.navigate(['pasien/detail', this.GridSelectedData.id]);
                } else {
                    this.utilityService.onShowCustomAlert('warning', 'Oops', 'Tidak Ada Data Yang Dipilih');
                }
                break;
            case 'edit':
                if (this.GridSelectedData) {
                    this.router.navigate(['pasien/edit', this.GridSelectedData.id]);
                } else {
                    this.utilityService.onShowCustomAlert('warning', 'Oops', 'Tidak Ada Data Yang Dipilih');
                }
                break;
            case 'delete':
                this.onDeleteFormPasien(this.GridSelectedData);
                break;
            default:
                break;
        }
    }

    onDeleteFormPasien(data: IPasien): void {
        this.store.dispatch(fromActions.deleteRequest({ payload: { id: data.id } }))
    }

    handleGridSelectionChanged(args: IPasien): void {
        this.GridSelectedData = args;
    }
}
