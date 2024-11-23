import * as authActions from "./reducers/auth/actions";
import * as testsActions from "./reducers/tests/actions";


export const actions = {
    ...authActions,
    ...testsActions
};