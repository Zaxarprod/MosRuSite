import React from "react"
import style from './Nav.module.scss'
import {NavLink} from 'react-router-dom'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <div>
                <NavLink to={'/search'} activeClassName={style.active} exact>Найти друга</NavLink>
            </div>
            <div>
                <NavLink to={'/about'} activeClassName={style.active} exact>О проекте</NavLink>
            </div>
            <div>
                <NavLink to={'/contacts'} activeClassName={style.active} exact>Контакты</NavLink>
            </div>
        </div>
    )
}