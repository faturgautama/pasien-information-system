import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPasien, Pasien } from 'src/app/model/pasien.model';
import * as API from '../../api';
import { HttpOperationService } from '../http-operation/http-operation.service';

@Injectable({
    providedIn: 'root'
})
export class PasienService {

    API = API;

    constructor(
        private httpOperationService: HttpOperationService,
    ) { }

    getAllPasien(): Observable<any> {
        return this.httpOperationService.getRequest(this.API.PASIEN_GET_ALL)
            .pipe(
                map((result) => {
                    let res = {
                        responseResult: true,
                        message: 'Get Data Berhasil',
                        data: result,
                    }

                    if (!result) {
                        res = {
                            responseResult: false,
                            message: 'Something Went Wrong',
                            data: []
                        };
                    }

                    return res;
                })
            )
    }

    getByIdPasien(id: number): Observable<any> {
        return this.httpOperationService.getRequest(`${this.API.PASIEN_GET_BY_ID}${id}`)
            .pipe(
                map((result) => {
                    let res = {
                        responseResult: true,
                        message: 'Get Data Berhasil',
                        data: result,
                    }

                    if (!result) {
                        res = {
                            responseResult: false,
                            message: 'Something Went Wrong',
                            data: null
                        };
                    } else {
                        result.waktu_entry = formatDate(result.waktu_entry, 'yyyy-MM-dd', 'EN') as any;
                        result.tanggal_lahir = formatDate(result.tanggal_lahir, 'yyyy-MM-dd', 'EN') as any;

                        res = {
                            responseResult: true,
                            message: 'Get Data Berhasil',
                            data: result,
                        }
                    }

                    return res;
                })
            );
    }

    getJumlahPasienPerGender(): Observable<any> {
        return this.httpOperationService.getRequest(this.API.PASIEN_GET_ALL)
            .pipe(
                map((result: IPasien[]) => {
                    let gender_pria = 0;
                    let gender_wanita = 0;

                    result.forEach((item) => {
                        if (item.gender.toLowerCase() == 'pria') {
                            gender_pria = gender_pria + 1;
                        } else {
                            gender_wanita = gender_wanita + 1;
                        }
                    });

                    let res = {
                        responseResult: true,
                        message: 'Get Jumlah Pasien Per Gender Berhasil',
                        data: [gender_pria, gender_wanita],
                    }

                    if (!result) {
                        res = {
                            responseResult: false,
                            message: 'Something Went Wrong',
                            data: []
                        };
                    }

                    return res;
                })
            )
    }

    getDomisiliPasien(): Observable<any> {
        return this.httpOperationService.getRequest(this.API.PASIEN_GET_ALL)
            .pipe(
                map((result: IPasien[]) => {
                    let semarang = 0;
                    let luar_semarang = 0;

                    result.forEach((item) => {
                        if (item.kota.toLowerCase() == 'semarang') {
                            semarang = semarang + 1;
                        } else {
                            luar_semarang = luar_semarang + 1;
                        }
                    });

                    let res = {
                        responseResult: true,
                        message: 'Get Domisili Pasien Berhasil',
                        data: [semarang, luar_semarang],
                    }

                    if (!result) {
                        res = {
                            responseResult: false,
                            message: 'Something Went Wrong',
                            data: []
                        };
                    }

                    return res;
                })
            )
    }

    savePasien(payload: IPasien): Observable<any> {
        let data = JSON.parse(JSON.stringify(payload));

        data.tanggal_lahir = new Date(data.tanggal_lahir);

        return this.httpOperationService.postRequest(this.API.PASIEN_POST, data)
            .pipe(
                map((result) => {
                    let res = {
                        responseResult: true,
                        message: 'Get Data Berhasil',
                        data: result,
                    }

                    if (!result) {
                        res = {
                            responseResult: false,
                            message: 'Something Went Wrong',
                            data: null
                        };
                    }

                    return res;
                })
            );
    }

    updatePasien(payload: IPasien): Observable<any> {
        return this.httpOperationService.putRequest(`${this.API.PASIEN_PUT}${payload.id}`, payload)
            .pipe(
                map((result) => {
                    let res = {
                        responseResult: true,
                        message: 'Get Data Berhasil',
                        data: result,
                    }

                    if (!result) {
                        res = {
                            responseResult: false,
                            message: 'Something Went Wrong',
                            data: null
                        };
                    }

                    return res;
                })
            );
    }

    deletePasien(id: number): Observable<any> {
        return this.httpOperationService.deleteRequest(`${this.API.PASIEN_DELETE}${id}`).pipe(
            map((result) => {
                let res = {
                    responseResult: true,
                    message: 'Get Data Berhasil',
                    data: result,
                }

                if (!result) {
                    res = {
                        responseResult: false,
                        message: 'Something Went Wrong',
                        data: null
                    };
                }

                return res;
            })
        );
    }
}
