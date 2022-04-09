import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {

    const activeClassForLink = (isActive: boolean) => {
        return s.link + (!isActive ? s.active : '');
    }


    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={() => activeClassForLink(true)}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={() => activeClassForLink(true)}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={() => activeClassForLink(true)}>junior-plus</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
