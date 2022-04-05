import React from 'react'
import s from './Message.module.css';


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageBlock}>
            <div className={s.messageBlock__image}>
                <img src={props.avatar} alt="avatar-user"/>
            </div>
            <div className={s.message__entryField}>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
                <span>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
