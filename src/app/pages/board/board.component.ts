import { Component, OnInit } from '@angular/core';
import { IKanbanBoard } from 'src/app/model/kanban-board.model';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

    Boards: IKanbanBoard[];

    constructor() {
        this.Boards = [
            {
                id: 'dalam_antrian', header_background_color: '#A0C3D2', header_caption: 'Dalam Antrian', connected_to: ['sedang_periksa'], data: [
                    {
                        "waktu_entry": new Date("2023-02-05"),
                        "nama_lengkap": "Kim Jennie",
                        "alamat_lengkap": "Jalan Maju Jaya 1",
                        "tanggal_lahir": new Date("1997-02-05"),
                        "tempat_lahir": "Semarang",
                        "is_active": true as any,
                        "kota": "Semarang",
                        "usia": "25",
                        "gender": "Wanita",
                        "no_identitas": "1212312312",
                        "no_rekam_medis": "6a71a9a7-346b-4e99-9d7e-b05f756d4093",
                        "id": 1
                    },
                    {
                        "waktu_entry": new Date("2023-02-05"),
                        "nama_lengkap": "Kim Jisoo",
                        "alamat_lengkap": "Jalan Indonesia Raya 1",
                        "tanggal_lahir": new Date("1995-02-05"),
                        "tempat_lahir": "Semarang",
                        "is_active": true as any,
                        "kota": "Semarang",
                        "usia": "27",
                        "gender": "Wanita",
                        "no_identitas": "123123412312",
                        "no_rekam_medis": "06bc1a2e-9af8-4ce9-869c-5aa134ae88df",
                        "id": 2
                    },
                    {
                        "waktu_entry": new Date("2023-02-05"),
                        "nama_lengkap": "Lalisa Manobal",
                        "alamat_lengkap": "Jalan Maju Jaya 1",
                        "tanggal_lahir": new Date("1997-02-05"),
                        "tempat_lahir": "Semarang",
                        "is_active": true as any,
                        "kota": "Semarang",
                        "usia": "25",
                        "gender": "Wanita",
                        "no_identitas": "123456789",
                        "no_rekam_medis": "2bf61c00-8f5c-4027-badd-f5e6582e4d60",
                        "id": 3
                    },
                    {
                        "waktu_entry": new Date("2023-02-05"),
                        "nama_lengkap": "Park Rose",
                        "alamat_lengkap": "Jalan Maju Jaya 1",
                        "tanggal_lahir": new Date("1997-02-06"),
                        "tempat_lahir": "Semarang",
                        "is_active": true as any,
                        "kota": "Cilacap",
                        "usia": "25",
                        "gender": "Wanita",
                        "no_identitas": "12131435231213",
                        "no_rekam_medis": "62e38279-b5e4-4d6e-8fcc-f4c22d6ee011",
                        "id": 4
                    },
                    {
                        "waktu_entry": new Date("2023-02-05T05:05:36.504Z"),
                        "nama_lengkap": "Fatur Gautama S",
                        "alamat_lengkap": "Jalan Maju Indah 1",
                        "tanggal_lahir": new Date("1997-08-04T00:00:00.000Z"),
                        "tempat_lahir": "Binjai",
                        "is_active": true as any,
                        "kota": "Semarang",
                        "usia": "25",
                        "gender": "Pria",
                        "no_identitas": "1218721289312893",
                        "no_rekam_medis": "bae00983-6eb0-4f5f-91ad-363832b64317",
                        "id": 5
                    }
                ]
            },
            { id: 'sedang_periksa', header_background_color: '#D7E9B9', header_caption: 'Sedang Periksa', connected_to: ['dalam_antrian', 'finish_periksa'], data: [] },
            { id: 'finish_periksa', header_background_color: '#CDE990', header_caption: 'Periksa Selesai', connected_to: ['sedang_periksa', 'ambil_obat'], data: [] },
            { id: 'ambil_obat', header_background_color: '#B7B78A', header_caption: 'Ambil Obat', connected_to: ['finish_periksa'], data: [] },
        ];
    }

    ngOnInit(): void {
    }

}
