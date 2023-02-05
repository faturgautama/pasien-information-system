import { ColDef } from "ag-grid-community";

export interface IGrid {
    column: ColDef[];
    dataSource: any;
}