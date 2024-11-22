export interface Answer{
    id: string;
    text: string;
    isCorrect: boolean;
}

export interface Question{
    id: string;
    title: string;
    answers: Answer[];
}

export interface Test{
    id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface ITestState{
    tests: Test[]
}

export enum TestActionTypes{
    GET_ALL = "GET_ALL",
}

export interface ITestAction{
    type: TestActionTypes,
    payload: any
}