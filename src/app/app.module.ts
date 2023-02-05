import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { NgChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppComponent } from './app.component';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { InputDataPasienComponent } from './pages/pasien/input-data-pasien/input-data-pasien.component';
import { DetailDataPasienComponent } from './pages/pasien/detail-data-pasien/detail-data-pasien.component';
import { ListDataPasienComponent } from './pages/pasien/list-data-pasien/list-data-pasien.component';
import { UpdateDataPasienComponent } from './pages/pasien/update-data-pasien/update-data-pasien.component';
import { ChartComponent } from './pages/chart/chart.component';
import { BoardComponent } from './pages/board/board.component';

import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { ActionButtonComponent } from './components/button/action-button/action-button.component';
import { PageTitleComponent } from './components/typograph/page-title/page-title.component';
import { GridComponent } from './components/grid/grid.component';
import { FormValidatorComponent } from './components/form/form-validator/form-validator.component';

import { reducer } from '../app/store'
import { environment } from 'src/environments/environment';
import { PasienEffect } from './store/effect/pasien.effect';
import { KanbanCardComponent } from './components/kanban/kanban-card/kanban-card.component';
import { KanbanBoardComponent } from './components/kanban/kanban-board/kanban-board.component';

@NgModule({
    declarations: [
        AppComponent,
        BerandaComponent,
        InputDataPasienComponent,
        DetailDataPasienComponent,
        ListDataPasienComponent,
        NavbarComponent,
        DashboardComponent,
        ActionButtonComponent,
        PageTitleComponent,
        GridComponent,
        FormValidatorComponent,
        ChartComponent,
        UpdateDataPasienComponent,
        BoardComponent,
        KanbanCardComponent,
        KanbanBoardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([
            PasienEffect,
        ]),
        AgGridModule,
        NgChartsModule,
        NoopAnimationsModule,
        DragDropModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
