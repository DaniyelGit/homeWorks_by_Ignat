import React, {ChangeEvent, FocusEventHandler, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.value.trim();
        setName(name);
        setError(false);
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name);
            name && setName('');
            alert(`Привет ${name}`)
        }
        else {
            error && setError(true)
        }
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser();
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
