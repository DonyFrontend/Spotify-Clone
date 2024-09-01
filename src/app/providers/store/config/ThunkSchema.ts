import { Dispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios"

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    dispatch?: Dispatch
}

export interface initialStateSchema {
    isLoading: boolean,
    error?: null | unknown,
    data: [] | object
}