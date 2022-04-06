import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {Button, TextField} from "@mui/material";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    // const inputClass = error ? s.error : '';

    const textError = error ? 'Вы не ввели Имя': 'Введите Имя';

    return (
        <div className={s.wrapper}>
            <TextField value={name}
                       error={error}
                       onChange={setNameCallback}
                       // className={inputClass}
                       label={textError}
                       variant={'outlined'}
                       size={'small'}
                       autoFocus
            />
            <Button style={{marginLeft: '20px'}} onClick={addUser} variant="contained">add</Button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
