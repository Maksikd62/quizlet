export interface IAuthState {
    isAuth: boolean,
    user: IUserModel | null
    role: string | null,
};

export interface IUserModel {
    id: string,
    email: string,
    role: string,
    firstName: string,
    lastName: string
};

export interface ILoginValues {
    email: string;
    password: string;
};

export enum AuthActionTypes {
    SIGN_IN = "SIGN_IN",
    LOGOUT = "LOGOUT"
};

export interface ILoginResponse {
    accessToken: string,
    refreshToken: string
};

export interface IAuthAction {
    type: AuthActionTypes,
    payload: any
};