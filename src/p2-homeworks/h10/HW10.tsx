import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, selectCurrencyLoadingState} from "./bll/loadingReducer";
import preloader from './assets/preloader.svg';

const HW10: React.FC = () => {
    // useSelector, useDispatch

    const {
        isLoading,
    } = useSelector(selectCurrencyLoadingState)

    const dispatch = useDispatch();

    const loading = isLoading;



    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => {
            dispatch(loadingAC(false));
        }, 5000);
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={preloader} alt="preloaderSVG"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
