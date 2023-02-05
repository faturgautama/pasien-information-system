import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { IPasien } from "src/app/model/pasien.model";

// ** Get All
export const getAllRequest = createAction('[PASIEN] Request Get All');
export const getAllSuccessResponse = createAction('[PASIEN] Get All Success Response', props<{ payload: IPasien[] }>());
export const getAllFailedResponse = createAction('[PASIEN] Get All Failed Response', props<{ payload: HttpErrorResponse }>());

// ** Get By Id
export const getByIdRequest = createAction('[PASIEN] Request Get By Id', props<{ payload: { id: number } }>());
export const getByIdSuccessResponse = createAction('[PASIEN] Get By Id Success Response', props<{ payload: IPasien }>());
export const getByIdFailedResponse = createAction('[PASIEN] Get By Id Failed Response', props<{ payload: string }>());

// ** Save
export const saveRequest = createAction('[PASIEN] Request Save', props<{ payload: IPasien }>());
export const saveSuccessResponse = createAction('[PASIEN] Save Success Response', props<{ payload: IPasien }>());
export const saveFailedResponse = createAction('[PASIEN] Save Failed Response', props<{ payload: string }>());

// ** Update
export const updateRequest = createAction('[PASIEN] Request Update', props<{ payload: IPasien }>());
export const updateSuccessResponse = createAction('[PASIEN] Update Success Response', props<{ payload: string }>());
export const updateFailedResponse = createAction('[PASIEN] Update Failed Response', props<{ payload: string }>());

// ** Delete
export const deleteRequest = createAction('[PASIEN] Request Delete', props<{ payload: { id: number } }>());
export const deleteSuccessResponse = createAction('[PASIEN] Delete Success Response', props<{ payload: string }>());
export const deleteFailedResponse = createAction('[PASIEN] Delete Failed Response', props<{ payload: string }>());

// ** Get Jumlah Pasien Per Gender 
export const getJumlahPasienPerGenderRequest = createAction('[PASIEN] Request Get Jumlah Pasien Per Gender');
export const getJumlahPasienPerGenderSuccessResponse = createAction('[PASIEN] Get Jumlah Pasien Per Gender Success Response', props<{ payload: number[] }>());
export const getJumlahPasienPerGenderFailedResponse = createAction('[PASIEN] Get Jumlah Pasien Per Gender Failed Response', props<{ payload: HttpErrorResponse }>());

// ** Get Domisili Pasien
export const getDomisiliPasienRequest = createAction('[PASIEN] Request Get Domisili Pasien');
export const getDomisiliPasienSuccessResponse = createAction('[PASIEN] Get Domisili Pasien Success Response', props<{ payload: number[] }>());
export const getDomisiliPasienFailedResponse = createAction('[PASIEN] Get Domisili Pasien Failed Response', props<{ payload: HttpErrorResponse }>());