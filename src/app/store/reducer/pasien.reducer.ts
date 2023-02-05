import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from '../action/pasien.action';

export const initialState = { responseResult: true, data: [] as any, message: '' };

const _pasienReducer = createReducer(
    initialState,
    // ** Get ==
    on(Actions.getAllRequest, (state) => ({ responseResult: true, data: [], message: 'GET REQUEST' })),
    on(Actions.getAllSuccessResponse, (state, { payload }) => ({ responseResult: true, data: payload, message: "GET SUCCESS" })),
    on(Actions.getAllFailedResponse, (state, { payload }) => ({ responseResult: false, data: [], message: "GET FAILED" })),

    // ** Get By Id ==
    on(Actions.getByIdRequest, (state, { payload }) => ({ responseResult: true, data: payload, message: 'GET BY ID REQUEST' })),
    on(Actions.getByIdSuccessResponse, (state, { payload }) => ({ responseResult: true, data: payload, message: "GET BY ID SUCCESS" })),
    on(Actions.getByIdFailedResponse, (state, { payload }) => ({ responseResult: false, data: [], message: "GET BY ID FAILED" })),

    // ** Save Child ==
    on(Actions.saveRequest, (state, { payload }) => ({ responseResult: true, data: payload, message: "SAVE REQUEST" })),
    on(Actions.saveSuccessResponse, (state, { payload }) => ({ responseResult: true, data: payload, message: "SAVE REQUEST SUCCESS" })),
    on(Actions.saveFailedResponse, (state, { payload }) => ({ responseResult: false, data: [], message: "SAVE REQUEST FAILED" })),

    // ** Update ==
    on(Actions.updateRequest, (state, { payload }) => ({ responseResult: true, data: payload, message: "UPDATE REQUEST" })),
    on(Actions.updateSuccessResponse, (state, { payload }) => ({ responseResult: true, data: payload, message: "UPDATE REQUEST SUCCESS" })),
    on(Actions.updateFailedResponse, (state, { payload }) => ({ responseResult: false, data: [], message: "UPDATE REQUEST FAILED" })),

    // ** Delete ==
    on(Actions.deleteRequest, (state, { payload }) => ({ responseResult: true, data: payload, message: "DELETE REQUEST" })),
    on(Actions.deleteSuccessResponse, (state, { payload }) => ({ responseResult: true, data: payload, message: "DELETE REQUEST SUCCESS" })),
    on(Actions.deleteFailedResponse, (state, { payload }) => ({ responseResult: false, data: [], message: "DELETE REQUEST FAILED" })),

    // ** Get Jumlah Pasien Per Gender ==
    on(Actions.getJumlahPasienPerGenderRequest, (state) => ({ responseResult: true, data: [], message: 'GET JUMLAH PASIEN PER GENDER REQUEST' })),
    on(Actions.getJumlahPasienPerGenderSuccessResponse, (state, { payload }) => ({ responseResult: true, data: payload, message: "GET JUMLAH PASIEN PER GENDER SUCCESS" })),
    on(Actions.getJumlahPasienPerGenderFailedResponse, (state, { payload }) => ({ responseResult: false, data: [], message: "GET JUMLAH PASIEN PER GENDER FAILED" })),

    // ** Get Jumlah Domisili Pasien ==
    on(Actions.getDomisiliPasienRequest, (state) => ({ responseResult: true, data: [], message: 'GET DOMISILI PASIEN REQUEST' })),
    on(Actions.getDomisiliPasienSuccessResponse, (state, { payload }) => ({ responseResult: true, data: payload, message: "GET DOMISILI PASIEN SUCCESS" })),
    on(Actions.getDomisiliPasienFailedResponse, (state, { payload }) => ({ responseResult: false, data: [], message: "GET DOMISILI PASIEN FAILED" })),
)

export function pasienReducer(state: any, action: Action) {
    return _pasienReducer(state, action);
};