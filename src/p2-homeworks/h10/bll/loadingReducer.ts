import {AppStoreType} from "./store";

type initStateType = {
    isLoading: boolean
}
const initState: initStateType = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: GlobalACType): initStateType => { // fix any
    switch (action.type) {
        case 'IS_LOADING': {
            return {...state, isLoading: action.payload}
        }
        default: return state
    }
}


type loadingACType = {
    type: 'IS_LOADING',
    payload: boolean
}
export const loadingAC = (value: boolean): loadingACType => {
    return  {
        type: 'IS_LOADING',
        payload: value
    }
}

type GlobalACType = loadingACType;


export const selectCurrencyLoadingState = (store: AppStoreType) => store.loading;