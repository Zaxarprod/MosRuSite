import React from "react"
import style from './Block5.module.scss'
import {Col, Row} from "antd"
import photo1 from './../../../common/images/storyBlock/Vector-1.png'
import photo2 from './../../../common/images/storyBlock/Vector-2.png'
import photo3 from './../../../common/images/storyBlock/Vector-3.png'

export const Block5 = () => {
    return (
        <Row className={style.contentHome}>
            <Col span={3}></Col>
            <Col span={18} className={style.wrapper}>
                <div className={style.block1}>
                    <h2 className={style.header}>Счастливые истории</h2>
                    <p>
                        Более 600 кошек и собак уже нашли свой дом благодаря проекту <br/>
                        «Друг для друга». Мы рады поделиться счастливыми историями<br/>
                        некоторых из них. Вместе мы делаем мир лучше!
                    </p>
                </div>
                <div className={style.block2}>
                    <div>
                        <img src={photo1}/>
                        <p className={style.name}>Арчи и Юлия</p>
                        <p>
                            Более 600 кошек и собак уже<br/>
                            нашли свой дом благодаря<br/>
                            проекту «Друг для друга». Мы<br/>
                            рады поделиться счастливыми<br/>
                            историями некоторых из них.<br/>
                            Вместе мы делаем мир лучше!
                        </p>
                    </div>
                    <div>
                        <img src={photo2}/>
                        <p className={style.name}>Максим и Мармелад</p>
                        <p>
                            Более 600 кошек и собак уже<br/>
                            нашли свой дом благодаря<br/>
                            проекту «Друг для друга». Мы<br/>
                            рады поделиться счастливыми<br/>
                            историями некоторых из них.<br/>
                            Вместе мы делаем мир лучше!
                        </p>
                    </div>
                    <div>
                        <img src={photo3}/>
                        <p className={style.name}>Анна и Малыш</p>
                        <p>
                            Более 600 кошек и собак уже<br/>
                            нашли свой дом благодаря<br/>
                            проекту «Друг для друга». Мы<br/>
                            рады поделиться счастливыми<br/>
                            историями некоторых из них.<br/>
                            Вместе мы делаем мир лучше!
                        </p>
                    </div>
                </div>
                <div className={style.button}>
                    Другие истории
                </div>
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}