import React from "react"
import style from './Block2.module.scss'
import {Col, Row} from "antd";
import dog3 from "../../../common/images/dog3.png"
import cat1 from "../../../common/images/cat1.png"
import cat2 from "../../../common/images/cat2.png"

export const Block2 = () => {
    return (
        <Row className={style.contentHome}>
            <Col span={3}></Col>
            <Col span={9}>
                <div className={style.leftPart}>
                    <img src={cat1} className={style.img1}/>
                    <img src={cat2} className={style.img2}/>
                    <img src={dog3} className={style.img3}/>
                </div>
            </Col>
            <Col span={9}>
                <div className={style.rightPart}>
                    <h3 className={style.aboutHeader}>КОРОТКО О НАС</h3>
                    <h2 className={style.header}>О проекте</h2>
                    <p className={style.text}>
                        ЭЭЭЭ– это уникальный проект, который помогает людям
                        и питомцам из приютов встретиться и стать друзьями на всю жизнь.
                        Миссия проекта - формирование культуры ответственного
                        отношения к домашним животным. Решение взять кошку
                        или собаку из приюта должно быть осознанным, именно
                        поэтому мы помогаем потенциальным владельцам не
                        только найти питомца.
                    </p>
                </div>
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}