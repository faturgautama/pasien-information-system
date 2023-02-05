import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarMenu } from 'src/app/model/navbar.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    Menus: INavbarMenu[];

    constructor(
        private router: Router,
    ) {
        this.Menus = [
            { id: 'beranda', caption: 'Beranda', url: '' },
            { id: 'pasien', caption: 'Data Pasien', url: 'pasien/list' },
            { id: 'chart', caption: 'Chart Pasien', url: 'chart' },
            { id: 'board', caption: 'Board Pasien', url: 'board' },
        ]
    }

    ngOnInit(): void {
    }

    handleNavigateToMenu(url: string): void {
        this.router.navigateByUrl(url);
    }
}
