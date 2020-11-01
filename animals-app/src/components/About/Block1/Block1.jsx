import React from "react"
import style from './Block1.module.scss'
import {Col, Row} from "antd";
import {Navigation} from "../../Navigation/Navigation";
import group from "../../../common/images/About/Group 19.svg";

export const Block1 = () => {
    return (
        <Row className={style.wrapper}>
            <Col span={3}></Col>
            <Col span={18}>
                <h2 className={style.header}>О нас</h2>
                <h2 className={style.header2}>Социальный проект в поддержку бездомных животных</h2>
                <object type="image/svg+xml" data={group} className={style.groupPhotos}>
                    Your browser does not support SVG
                </object>
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}