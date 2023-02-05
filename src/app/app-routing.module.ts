import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { BoardComponent } from "./pages/board/board.component";
import { ChartComponent } from "./pages/chart/chart.component";
import { DetailDataPasienComponent } from "./pages/pasien/detail-data-pasien/detail-data-pasien.component";
import { InputDataPasienComponent } from "./pages/pasien/input-data-pasien/input-data-pasien.component";
import { ListDataPasienComponent } from "./pages/pasien/list-data-pasien/list-data-pasien.component";
import { UpdateDataPasienComponent } from "./pages/pasien/update-data-pasien/update-data-pasien.component";

const routes: Routes = [
    { path: '', component: BerandaComponent, data: { title: 'Beranda' } },
    {
        path: 'pasien', children: [
            { path: 'add', component: InputDataPasienComponent, data: { title: 'Input Data Pasien' } },
            { path: 'detail/:id', component: DetailDataPasienComponent, data: { title: 'Detail Data Pasien' } },
            { path: 'edit/:id', component: UpdateDataPasienComponent, data: { title: 'Update Data Pasien' } },
            { path: 'list', component: ListDataPasienComponent, data: { title: 'List Data Pasien' } },
        ]
    },
    {
        path: 'chart', component: ChartComponent, data: { title: 'Chart Pasien' }
    },
    {
        path: 'board', component: BoardComponent, data: { title: 'Board Pasien' }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled',
        scrollPositionRestoration: 'top',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
