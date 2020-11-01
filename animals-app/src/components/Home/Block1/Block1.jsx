import React from "react"
import style from "./Block1.module.scss"
import {Col, Row} from "antd"
import dog from './../../../common/images/Dog.png'
import {NavLink} from "react-router-dom";

export const Block1 = () => {
    return (
        <Row className={style.contentHome}>
            <Col span={3}></Col>
            <Col span={9}>
                <div className={style.leftPart}>
                    <h3 className={style.love}>ЛЮБИТЬ ЛЕГКО</h3>
                    <h2 className={style.header}>Этим животным нужна<br/>
                        Ваша любовь и забота !
                    </h2>
                    <p className={style.text}>
                        Более 50 котов и 70 кошек ждут, когда придет человек с большим<br/>
                        и добрым сердцем, и заберет друга к себе домой. Подарите им шанс<br/>
                        стать нужными и любимыми животными.
                    </p>
                    <div className={style.buttons}>
                        <div><NavLink to={'/search'}>Найти кошку</NavLink></div>
                        <div><NavLink to={'/search'}>Найти собаку</NavLink></div>
                    </div>
                </div>
            </Col>
            <Col span={9}>
                <div className={style.rightPart}>
                    <img src={dog}/>
                </div>
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}