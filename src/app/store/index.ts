import { ActionReducerMap } from "@ngrx/store";
import { Pasien } from "../model/pasien.model";
import { pasienReducer } from "./reducer/pasien.reducer";

interface MainState {
    pasien: Pasien
}

export const reducer: ActionReducerMap<MainState> = {
    pasien: pasienReducer
}