import React, { useReducer } from 'react'

const inputReducer = (state, action) => {
    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                value: action.value,
            };
        case "TOUCH":
            return { ...state, isTouched: true};
        case "RESET":
            return {value: "", isTouched: false};
        default:
            return state
    }
}

export default function useInput(validator, initialValue) {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: initialValue || "",
        isTouched: false
    })
    const isValid = validator(inputState.value)
    const hasError = !isValid && inputState.isTouched

    const inputChangeHandler = (event) => {
        dispatch({type: "CHANGE", value: event.target.value})
    }

    const inputBlurHandler = (event) => {
        dispatch({type: "TOUCH"})
    }

    const resetInput = (event) => {
        dispatch({type: "RESET"})
    }

    return {
        value: inputState.value,
        hasError,
        isValid,
        inputChangeHandler,
        inputBlurHandler,
        resetInput
    }
}
