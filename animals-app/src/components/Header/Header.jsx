import React from "react"
import { Row, Col } from 'antd'
import style from './Header.module.scss'
import {Nav} from "../Nav/Nav"
import logo from './../../common/images/Mos.ru_logo.png'
import {Login} from "./Login/Login";

export const Header = () => {
    return (
        <Row className={style.header}>
            <Col span={3}></Col>
            <Col span={4}>
                <div className={style.brand}>
                    <a href={'http://mos.ru'}>
                    <img src={logo} />
                    </a>
                </div>
            </Col>
            <Col span={8}>
                <Nav />
            </Col>
            <Col span={6}>
                <Login />
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}