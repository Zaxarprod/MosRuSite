import React from "react"
import style from './About.module.scss'
import {Col, Row} from "antd";
import Navigation from "../Navigation/Navigation"
import svg from "../../common/images/ping.svg";
import {Block1} from "./Block1/Block1";
import {Block3} from "./Block3/Block3";
import {group} from './../../common/images/About/Group 22.svg'
import {Block2} from "./Block2/Block2";

export const About = () => {
    return (
        <div className={style.about}>
            <object type="image/svg+xml" data={svg} className={style.pingSvg}>
                Your browser does not support SVG
            </object>
            <Row className={style.nav}>
                <Col span={3}></Col>
                <Col span={18}>
                    <Navigation />
                </Col>
                <Col span={3}></Col>
            </Row>
            <Block1 />
            <Block2 />
            <Block3 />
        </div>
    )
}