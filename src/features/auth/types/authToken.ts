import { AxiosInstance } from "axios"

export interface IAuthResponse{
    token: string
}

export interface IUserData {
    client_ID: string,
    redirect_uri: string,
    response_type: string,
    scope?: string,
    state?: string,
    show_dialog?: boolean,
}

export interface ThunkConfig{
    extra: {
        api: AxiosInstance
    },
    rejectValue: string,
}