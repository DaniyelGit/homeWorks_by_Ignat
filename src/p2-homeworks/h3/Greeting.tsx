import React, {ChangeEvent, FocusEventHandler, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {Button, TextField} from "@mui/material";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.inputError : s.input;

    return (
        <div className={s.wrapper}>
            <div>
                <input type="text"
                       value={name}
                       onChange={setNameCallback}
                       onKeyPress={onEnter}
                       onBlur={setNameCallback}
                       className={inputClass}
                />
                <div className={s.error}>{error}</div>
            </div>
            <Button
                style={{marginLeft: '20px'}}
                onClick={addUser}
                variant="contained"
                disabled={!name}
            >add</Button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
