export interface IPasien {
    id: number;
    no_rekam_medis: string;
    no_identitas: string;
    nama_lengkap: string;
    alamat_lengkap: string;
    kota: string;
    tanggal_lahir: Date;
    tempat_lahir: string;
    usia: string;
    gender: string;
    is_active: string;
    waktu_entry: Date;
}

export class Pasien {
    responseResult: boolean;
    message: string;
    data: IPasien[];
}