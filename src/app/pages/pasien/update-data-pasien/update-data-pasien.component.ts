import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IActionButton } from 'src/app/model/button.model';
import { IPasien } from 'src/app/model/pasien.model';
import { UtilityService } from 'src/app/service/utility/utility.service';
import * as fromActions from '../../../store/action/pasien.action';

@Component({
    selector: 'app-update-data-pasien',
    templateUrl: './update-data-pasien.component.html',
    styleUrls: ['./update-data-pasien.component.css']
})
export class UpdateDataPasienComponent implements OnInit {

    // ** Action Button Component Attributes
    ActionButtons: IActionButton[];

    // ** Form Pasien
    FormPasien: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private store: Store<{ pasien: any }>
    ) {
        // ** Get Current Store 
        this.onGetCurrentStore();

        // ** Set Value 
        this.ActionButtons = [
            { id: 'back', caption: 'Back', icon: 'fa-chevron-left fa-sm' },
            { id: 'reset', caption: 'Reset', icon: 'fa-rotate-left fa-sm' },
            { id: 'edit', caption: 'Edit', icon: 'fa-pen-to-square fa-sm' },
        ];

        // ** Set Form Pasien Attributes 
        this.FormPasien = this.formBuilder.group({
            id: ['', [Validators.required]],
            no_rekam_medis: ['', [Validators.required]],
            no_identitas: ['', [Validators.required]],
            nama_lengkap: ['', [Validators.required]],
            alamat_lengkap: ['', [Validators.required]],
            kota: ['', [Validators.required]],
            tanggal_lahir: [new Date(), [Validators.required]],
            tempat_lahir: ['', [Validators.required]],
            usia: [0, [Validators.required, Validators.min(1)]],
            gender: ["", [Validators.required]],
            is_active: [true, [Validators.required]],
            waktu_entry: [new Date(), [Validators.required]],
        })
    }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params.id;
        this.onGetDataPasien(id);
    }

    onGetCurrentStore(): void {
        this.store.select('pasien')
            .subscribe((result) => {
                if (result.message == 'UPDATE REQUEST SUCCESS') {
                    if (result) {
                        this.utilityService.onShowCustomAlert('success', 'Success', 'Data Berhasil Diupdate')
                            .then(() => {
                                this.handleClickActionButton('back');
                            })
                    }
                };

                if (result.message == 'GET BY ID SUCCESS') {
                    if (result) {
                        this.FormPasien.setValue(result.data);
                    }
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
            case 'reset':
                this.handleResetForm();
                break;
            case 'edit':
                this.handleSubmitFormPasien(this.FormPasien.value);
                break;
            default:
                break;
        }
    }

    handleSubmitFormPasien(data: IPasien): void {
        if (this.FormPasien.invalid) {
            this.utilityService.onShowCustomAlert('warning', 'Oops', 'Mohon Lengkapi Data Anda');
        } else {
            this.store.dispatch(fromActions.updateRequest({ payload: data }));
        }
    }

    handleResetForm(): void {
        this.FormPasien.reset();
        this.id.setValue("");
        this.no_identitas.setValue("");
        this.no_rekam_medis.setValue("");
        this.nama_lengkap.setValue("");
        this.alamat_lengkap.setValue("");
        this.kota.setValue("");
        this.tanggal_lahir.setValue(new Date());
        this.tempat_lahir.setValue("");
        this.usia.setValue("");
        this.gender.setValue("");
        this.is_active.setValue("");
        this.waktu_entry.setValue(new Date());
    }

    get id(): AbstractControl { return this.FormPasien.get('id') as AbstractControl }
    get no_identitas(): AbstractControl { return this.FormPasien.get('no_identitas') as AbstractControl }
    get no_rekam_medis(): AbstractControl { return this.FormPasien.get('no_rekam_medis') as AbstractControl }
    get nama_lengkap(): AbstractControl { return this.FormPasien.get('nama_lengkap') as AbstractControl }
    get alamat_lengkap(): AbstractControl { return this.FormPasien.get('alamat_lengkap') as AbstractControl }
    get kota(): AbstractControl { return this.FormPasien.get('kota') as AbstractControl }
    get tanggal_lahir(): AbstractControl { return this.FormPasien.get('tanggal_lahir') as AbstractControl }
    get tempat_lahir(): AbstractControl { return this.FormPasien.get('tempat_lahir') as AbstractControl }
    get usia(): AbstractControl { return this.FormPasien.get('usia') as AbstractControl }
    get gender(): AbstractControl { return this.FormPasien.get('gender') as AbstractControl }
    get is_active(): AbstractControl { return this.FormPasien.get('is_active') as AbstractControl }
    get waktu_entry(): AbstractControl { return this.FormPasien.get('waktu_entry') as AbstractControl }
}
