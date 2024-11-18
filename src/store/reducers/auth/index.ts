import { IAuthState, IAuthAction, AuthActionTypes } from "./types";

const authState: IAuthState = {
    isAuth: false,
    user: null,
    role: null
};

const AuthReducer = (state: IAuthState = authState, action: IAuthAction) => {
    switch(action.type) {
        case AuthActionTypes.SIGN_IN:
            return { ...state, isAuth: true, user: action.payload, role: action.payload.role };
        case AuthActionTypes.LOGOUT:
            return { ...state, isAuth: false, user: null, role: null };
        default:
            return state;
    }
};

export default AuthReducer;