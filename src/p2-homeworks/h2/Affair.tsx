import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    const setClassForPriority = () => {
        switch (props.affair.priority) {
            case 'low': {
                return s.low;
            }
            case 'high': {
                return s.high;
            }
            default: {
                return s.middle;
            }
        }
    }

    const classNameForPriority = setClassForPriority()

    return (
        <div className={s.affair}>
            <span className={s.affair__name}>{props.affair.name}</span>
            <span className={`${s.affair__priority} ${classNameForPriority}`}>{`[${props.affair.priority}]`}</span>
            <button className={s.affair__delete} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
