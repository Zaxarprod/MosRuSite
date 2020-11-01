import React from "react"
import style from './Block3.module.scss'
import {Col, Row} from "antd";
import icon1 from './../../../common/images/iconsHome/fa-solid_house-user.png'
import icon2 from './../../../common/images/iconsHome/ic_round-fact-check.png'
import icon3 from './../../../common/images/iconsHome/eva_phone-call-fill.png'
import icon4 from './../../../common/images/iconsHome/si-glyph_bubble-message-talk.png'
import icon5 from './../../../common/images/iconsHome/ant-design_heart-filled.png'

export const Block3 = () => {
    return (
        <Row className={style.contentHome}>
            <Col span={3}></Col>
            <Col span={18} className={style.wrapper}>
                <div className={style.center}>
                    <h2 className={style.header}>Как забрать питомца домой?</h2>
                    <div className={style.icons}>
                        <div>
                            <img src={icon1}/>
                            <p><b>1. Выберите питомца в</b> разделе “Найти друга” в главном меню.</p>
                        </div>
                        <div>
                            <img src={icon2}/>
                            <p><b>2. Зарегистрируйтесь и оформите</b> заявку на выбранное животное.</p>
                        </div>
                        <div>
                            <img src={icon3}/>
                            <p><b>3. Подождите обратной связи от куратора.</b> Вся подробная информация будет<br/>
                                в вашем кабинете.</p>
                        </div>
                        <div>
                            <img src={icon4}/>
                            <p><b>4.Пройдите собеседование</b> с куратором и познакомьтесь с питомцем лично.</p>
                        </div>
                        <div>
                            <img src={icon5}/>
                            <p><b>5.Заберите питомца домой</b> с куратором и познакомьтесь с питомцем лично.</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={3}>
            </Col>
        </Row>
    )
}