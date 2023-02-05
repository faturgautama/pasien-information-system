import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap, } from "rxjs/operators";
import * as fromActions from '../action/pasien.action';
import { PasienService } from "src/app/service/pasien/pasien.service";
import { IPasien } from "src/app/model/pasien.model";

@Injectable()
export class PasienEffect {

    constructor(
        private action$: Actions,
        private pasienService: PasienService,
    ) { }

    getAll$ = createEffect(() => this.action$.pipe(
        ofType(
            fromActions.getAllRequest,
            fromActions.deleteSuccessResponse,
        ),
        switchMap(() => this.pasienService.getAllPasien()
            .pipe(
                map(result => fromActions.getAllSuccessResponse({ payload: result.data as IPasien[] })),
                catchError(error =>
                    of(fromActions.getAllFailedResponse({ payload: error.message }))
                )
            )
        ))
    );

    getById$ = createEffect(() => this.action$.pipe(
        ofType(fromActions.getByIdRequest),
        map(action => action.payload),
        mergeMap(data =>
            this.pasienService.getByIdPasien(data.id)
                .pipe(
                    map((result) => {
                        if (result) {
                            return fromActions.getByIdSuccessResponse({ payload: result.data as IPasien })
                        } else {
                            return fromActions.getByIdFailedResponse({ payload: result.message })
                        }
                    }),
                    catchError(error =>
                        of(fromActions.saveFailedResponse({ payload: error.message }))
                    ))
        )
    ));

    insert$ = createEffect(() => this.action$.pipe(
        ofType(fromActions.saveRequest),
        map(action => action.payload),
        mergeMap(data =>
            this.pasienService.savePasien(data)
                .pipe(
                    map((result) => {
                        if (result) {
                            return fromActions.saveSuccessResponse({ payload: result })
                        } else {
                            return fromActions.saveFailedResponse({ payload: result.message })
                        }
                    }),
                    catchError(error =>
                        of(fromActions.saveFailedResponse({ payload: error.message }))
                    ))
        )
    ));

    update$ = createEffect(() => this.action$.pipe(
        ofType(fromActions.updateRequest),
        map(action => action.payload),
        mergeMap(data =>
            this.pasienService.updatePasien(data)
                .pipe(
                    map((result) => {
                        if (result) {
                            return fromActions.updateSuccessResponse({ payload: result.data })
                        } else {
                            return fromActions.updateFailedResponse({ payload: result.message })
                        }
                    }),
                    catchError(error => of(fromActions.updateFailedResponse({ payload: error })))
                )
        )
    ));

    delete$ = createEffect(() => this.action$.pipe(
        ofType(fromActions.deleteRequest),
        map(action => action.payload),
        mergeMap(data =>
            this.pasienService.deletePasien(data.id)
                .pipe(
                    map((result) => {
                        if (result) {
                            fromActions.deleteSuccessResponse({ payload: result.data })
                        } else {
                            return fromActions.deleteFailedResponse({ payload: result.message })
                        }
                    }),
                    catchError(error => of(fromActions.deleteFailedResponse({ payload: error })))
                )
        )
    ));

    getJumlahPasienPerGender$ = createEffect(() => this.action$.pipe(
        ofType(fromActions.getJumlahPasienPerGenderRequest),
        switchMap(() => this.pasienService.getJumlahPasienPerGender()
            .pipe(
                map(result => fromActions.getJumlahPasienPerGenderSuccessResponse({ payload: result.data })),
                catchError(error =>
                    of(fromActions.getJumlahPasienPerGenderFailedResponse({ payload: error.message }))
                )
            )
        ))
    );

    getDomisiliPasien$ = createEffect(() => this.action$.pipe(
        ofType(fromActions.getDomisiliPasienRequest),
        switchMap(() => this.pasienService.getDomisiliPasien()
            .pipe(
                map(result => fromActions.getDomisiliPasienSuccessResponse({ payload: result.data })),
                catchError(error =>
                    of(fromActions.getDomisiliPasienFailedResponse({ payload: error.message }))
                )
            )
        ))
    );
}