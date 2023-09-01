import React, {useReducer} from 'react'

export default function useSelect(validator, defaultValue) {

    const selectReducer = (state, action) => {
        switch(action.type){
            case "CHANGE":
                return {
                    value: action.value,
                    isTouched: true
                };
            case "RESET": 
                return {
                    value: defaultValue,
                    isTouched: false
                };
            default:
                return state
        }
    }
    const [selectState, dispatch] = useReducer(selectReducer,
        { value: defaultValue, isTouched: false}
    )

    const handleChange = (event) => {
        console.log('event target value ', event.target.value)
        dispatch({type: "CHANGE", value: event.target.value})
    }

    const isValid = validator(selectState.value)
    const hasError = !isValid && selectState.isTouched

    return {selectState, handleChange, hasError }
}