import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() { }

    onShowCustomAlert(icon: 'success' | 'warning' | 'error', title: string, message: string, customClass?: string): Promise<any> {
        return Swal.fire({
            icon,
            title,
            text: message,
            showCloseButton: false,
            showConfirmButton: true,
            customClass: {
                popup: customClass
            }
        });
    }

    onShowLoading(): void {
        Swal.showLoading(null);
    }

    onCloseLoading(): void {
        Swal.close();
    }

    onGenerateCustomColor(): any {
        const numberHex = (Math.random() * 0xfffff * 1000000).toString(16)
        return `#${numberHex.slice(0, 6)}`
    }
}
