import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import * as fromActions from '../../store/action/pasien.action';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

    BarChartDatasource: ChartConfiguration['data'];

    BarChartOptions: ChartConfiguration['options'] = {
        elements: {
            line: {
                tension: 0.25
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            },
        },
        plugins: {
            legend: { display: false },
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1
    }

    PieChartDatasource: ChartConfiguration['data'];

    PieChartOptions: ChartConfiguration['options'] = {
        plugins: {
            legend: { display: false },
        },
        responsive: false,
    }

    constructor(
        private store: Store<{ pasien: any }>
    ) {
        // ** Get Current Store 
        this.onGetCurrentStore();
    }

    ngOnInit(): void {
        // ** Call Get Jumlah Pasien Per Gender
        this.getJumlahPasienPerGender();

        // ** Call Get Domisili Pasien
        this.getDomisiliPasien();
    }

    onGetCurrentStore(): void {
        this.store.select('pasien')
            .subscribe((result) => {
                if (result.message == 'GET JUMLAH PASIEN PER GENDER SUCCESS') {
                    if (result) {
                        this.BarChartDatasource = {
                            datasets: [
                                {
                                    data: result.data,
                                    label: 'Pasien',
                                    backgroundColor: 'rgba(148,159,177,0.2)',
                                    borderColor: 'rgba(148,159,177,1)',
                                    pointBackgroundColor: 'rgba(148,159,177,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                                    fill: 'origin',
                                }
                            ],
                            labels: ['Pria', 'Wanita']
                        }
                    }
                };

                if (result.message == 'GET DOMISILI PASIEN SUCCESS') {
                    if (result) {
                        this.PieChartDatasource = {
                            datasets: [
                                {
                                    data: result.data,
                                    label: 'Kota',
                                    backgroundColor: 'rgba(148,159,177,0.2)',
                                    borderColor: 'rgba(148,159,177,1)',
                                    pointBackgroundColor: 'rgba(148,159,177,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                                    fill: 'origin',
                                }
                            ],
                            labels: ['Semarang', 'Luar Semarang']
                        }
                    }
                };
            })
    }

    getJumlahPasienPerGender(): void {
        this.store.dispatch(fromActions.getJumlahPasienPerGenderRequest());
    }

    getDomisiliPasien(): void {
        this.store.dispatch(fromActions.getDomisiliPasienRequest());
    }
}
