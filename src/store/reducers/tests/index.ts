import {ITestState, ITestAction, TestActionTypes} from "./types";
const testsState: ITestState = {
    tests: []
};

const TestsReducer = (state: ITestState = testsState, action: ITestAction) => {
    switch(action.type) {
        case TestActionTypes.GET_ALL:
            return { ...state, tests: action.payload};
        default:
            return state;
    }
};

export default TestsReducer;