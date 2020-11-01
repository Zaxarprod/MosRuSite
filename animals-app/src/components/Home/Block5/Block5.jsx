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
                        Более 300 кошек и собак уже нашли свой дом благодаря нашему<br/>
                        онлайн-проекту. Мы рады поделиться счастливыми историями <br/>
                        некоторых из них. Вместе мы делаем мир лучше!
                    </p>
                </div>
                <div className={style.block2}>
                    <div>
                        <img src={photo1}/>
                        <p className={style.name}>Арчи и Юлия</p>
                        <p style={{textAlign:'center'}}>
                            Я всегда знала,<br/>
                            что принципиально не буду<br/>
                            покупать щенка у заводчиков,<br/>
                            а возьму собаку из приюта<br/>
                            или с улицы, ведь для счастья<br/>
                            порода не важна. Когда в<br/>
                            приюте «Печатники» я увидела<br/>
                            Боба, то просто не могла<br/>
                            пройти мимо этого взгляда!<br/>

                        </p>
                    </div>
                    <div>
                        <img src={photo2}/>
                        <p className={style.name}>Максим и Мармелад</p>
                        <p style={{textAlign:'center'}}>
                            Когда у меня появилась<br/>
                            возможность завести собаку, я,<br/>
                            признаюсь, подумывала о<br/>
                            щенке. Взвесив все «за» и<br/>
                            «против», все же пришла к<br/>
                            выводу, что для моего образа<br/>
                            жизни больше подходит<br/>
                            взрослый пес. И тогда на ум<br/>
                            пришел только Бутуз.
                        </p>
                    </div>
                    <div>
                        <img src={photo3}/>
                        <p className={style.name}>Анна и Малыш</p>
                        <p style={{textAlign:'center'}}>
                            Первые полгода мы привыкали<br/>
                            друг к другу. Проблема была в<br/>
                            том, что Малыш не хотел<br/>
                            оставаться дома один<br/>
                            -  чувствовал себя одиноким<br/>
                            и сразу начинал жалобно выть. <br/>
                            Приходилось на день искать <br/>
                            ему компанию и отводить к<br/>
                            бабушке.
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