import React from "react"
import style from './Cart.module.scss'

export const Cart = ({img, name, description}) => {
    return (
        <div className={style.cart}>
            <div className={style.image}><img src={img}/></div>
            <p><b>{name}</b></p>
            <p style={{color:'#c4c4c4'}}>{description}</p>
        </div>
    )
}