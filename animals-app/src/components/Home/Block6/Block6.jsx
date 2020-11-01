import React, {useState} from "react"
import style from './Block6.module.scss'
import {Col, Row} from "antd";

export const Block6 = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <Row className={style.contentHome}>
            <Col span={3}></Col>
            <Col span={18} className={style.wrapper}>
                <h2 className={style.header}>Партнеры проекта</h2>
                <div className={style.toggler}>
                    <div className={!isClicked?style.active:''} onClick={()=>{
                            setIsClicked(false)
                    }}>
                        ПРИЮТЫ
                    </div>
                    <div className={isClicked?style.active:''} onClick={()=>{
                        setIsClicked(true)
                    }}>
                        ПАРТНЕРЫ
                    </div>
                </div>
                <div className={style.partnersBlock}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}