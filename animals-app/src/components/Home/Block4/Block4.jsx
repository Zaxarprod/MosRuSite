import React from "react"
import style from './Block4.module.scss'
import {Col, Row} from "antd"
import img1 from './../../../common/images/block4/Rectangle 32.png'
import img2 from './../../../common/images/block4/Rectangle 34.png'
import img3 from './../../../common/images/block4/Rectangle 36.png'
import img4 from './../../../common/images/block4/Rectangle 31.png'
import img5 from './../../../common/images/block4/Rectangle 33.png'
import img6 from './../../../common/images/block4/Rectangle 35.png'
import {NavLink} from "react-router-dom";

export const Block4 = () => {
    return (
        <Row className={style.contentHome}>
            <Col span={3}></Col>
            <Col span={18} className={style.wrapper}>
                <h2 className={style.header}>Найти друга</h2>
                <div className={style.block1}>
                    <div className={style.photoBlock}>
                        <div>
                            <img src={img1}/>
                            <p><b>Жорик</b></p>
                            <p style={{color:'#c4c4c4'}}>Мальчик / 2 года</p>
                        </div>
                        <div>
                            <img src={img2}/>
                            <p><b>Марсель</b></p>
                            <p style={{color:'#c4c4c4'}}>Мальчик / 4 года</p>
                        </div>
                        <div>
                            <img src={img3}/>
                            <p><b>Лаура</b></p>
                            <p style={{color:'#c4c4c4'}}>Девочка / 7 лет</p>
                        </div>
                    </div>
                    <div>
                        <h3 className={style.animalsHeader}>ЖИВОТНЫЕ, ГОТОВЫЕ ОБРЕСТИ<br/>
                            НОВЫЙ ДОМ
                        </h3>
                        <p className={style.text}>
                            ЭЭЭЭ– это уникальный проект, который помогает людям<br/>
                            и питомцам из приютов встретиться и стать друзьями на<br/>
                            всю жизнь.
                        </p>
                        <p className={style.text}>
                            ЭЭЭЭ– это уникальный проект, который помогает людям<br/>
                            и питомцам из приютов встретиться и стать друзьями на<br/>
                            всю жизнь.
                        </p>
                    </div>
                </div>
                <div className={style.buttonBlock}>
                    <div></div>
                    <div>
                        <div className={style.button}>
                            <NavLink to={'/search'}>В каталог</NavLink>
                        </div>
                    </div>
                </div>
                <div className={style.block2}>
                    <div className={style.photoBlock}>
                        <div>
                            <img src={img4}/>
                            <p><b>Рыжик</b></p>
                            <p style={{color:'#c4c4c4'}}>Мальчик / 7 месяцев</p>
                        </div>
                        <div>
                            <img src={img5}/>
                            <p><b>Матильда</b></p>
                            <p style={{color:'#c4c4c4'}}>Девочка/ 1 год</p>
                        </div>
                        <div>
                            <img src={img6}/>
                            <p><b>Маркиз</b></p>
                            <p style={{color:'#c4c4c4'}}>Мальчик / 5 лет</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className={style.statisticsNumber}>50+</p>
                            <p>Собак и кошек ждут нового<br/>
                                хозяина и готовы обрести новый дом
                            </p>
                        </div>
                        <div>
                            <p className={style.statisticsNumber}>50+</p>
                            <p>Собак и кошек ждут нового<br/>
                                хозяина и готовы обрести новый дом
                            </p>
                        </div>
                        <div>
                            <p className={style.statisticsNumber}>50+</p>
                            <p>Собак и кошек ждут нового<br/>
                                хозяина и готовы обрести новый дом
                            </p>
                        </div>
                        <div>
                            <p className={style.statisticsNumber}>50+</p>
                            <p>Собак и кошек ждут нового<br/>
                                хозяина и готовы обрести новый дом
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={3}>
            </Col>
        </Row>
    )
}