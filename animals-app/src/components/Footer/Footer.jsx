import React from "react"
import {Col, Row} from "antd"
import style from './Footer.module.scss'
import tw from './../../common/images/Footer/twitter.svg'
import inst from './../../common/images/Footer/instagram.svg'
import fac from './../../common/images/Footer/facebook.svg'
import svg from './../../common/images/logo.svg'
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";



export const Footer = () => {
    return (
        <Row className={style.footer}>
            <Col span={3}>

            </Col>
            <Col span={18}>
                <div className={style.wrapper1}>
                    <div className={style.brand}>
                        <a href={'http://mos.ru'}>
                            <object type="image/svg+xml" data={svg} className={style.logo}>
                                Your browser does not support SVG
                            </object>
                        </a>
                    </div>
                    <div>
                        <p className={style.header}>Наши соцсети</p>
                        <div className={style.sn}>
                            <TwitterOutlined />
                            <InstagramOutlined />
                            <FacebookOutlined />
                        </div>
                    </div>
                    <div>
                        <p className={style.header}>Каталог животных</p>
                        <div>
                            Коты
                        </div>
                        <div>
                            Собаки
                        </div>
                    </div>
                    <div>
                        <p className={style.header}>О проекте</p>
                        <div>
                            Пожертвования
                        </div>
                        <div>
                            Волонтерство
                        </div>
                    </div>
                    <div>
                        <p className={style.header}>Контакты</p>
                        <div>
                            О нас
                        </div>
                        <div>
                            Контакты
                        </div>
                    </div>
                </div>
                <div className={style.wrapper2}>
                    <div>@ mos.ru 2020 г.</div>
                    <div>Политика конфиденциальности</div>
                </div>
            </Col>
            <Col span={3}>

            </Col>
        </Row>
    )
}