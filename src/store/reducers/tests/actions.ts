import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { TestActionTypes, ITestAction, Test } from "./types";
import ServiceResponse from "../../../serviceResponse";

export interface ActionResult {
    success: boolean;
    message: string;
}

export const getAll =
    () => async (dispatch: Dispatch<ITestAction>): Promise<ActionResult> => {
        try {
            const response = await axios.get<ServiceResponse<Test[]>>(
                "https://quizlet-api-dpeeehgja8aghvcz.canadacentral-01.azurewebsites.net/api/tests",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const { data } = response;

            dispatch({ type: TestActionTypes.GET_ALL, payload: data.payload });

            const result: ActionResult = {
                success: true,
                message: "Тести успішно завантажені",
            };

            return result;
        } catch (error) {
            console.error("getAll error", error);

            const result: ActionResult = {
                success: false,
                message: "Не вдалося завантажити тести",
            };

            return result;
        }
    };
