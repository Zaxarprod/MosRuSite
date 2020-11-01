import React from "react"
import style from './LK.module.scss'
import {Col, Row} from "antd";
import Navigation from "../Navigation/Navigation";
import Search from "antd/es/input/Search";
import {Request} from "./Request/Request";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../redux/auth-selector";
import {Redirect} from "react-router-dom";

export const LK = () => {
    const isAuth = useSelector(getIsAuth)
    if(!isAuth){
        return <Redirect to={'/'}/>
    }
    return (
        <div className={style.LK}>
            <Row className={style.nav}>
                <Col span={3}></Col>
                <Col span={18}>
                    <Navigation />
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row>
                <Col span={3}></Col>
                <Col span={18} className={style.content}>
                    <div className={style.header}>
                        <h2>Мои заявки</h2>
                    </div>
                    <div className={style.search}>
                        <Search placeholder="Поиск заявки"
                                onSearch={()=>{}} enterButton className={style.inputSearch}/>
                    </div>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row>
                <Col span={3}></Col>
                <Col span={18} className={style.content}>
                    <div className={style.listFilters}>
                        <div>Все заявки</div>
                        <div>Одобренные</div>
                        <div>На рассмотрении</div>
                        <div>Отклонены</div>
                        <div className={style.line}></div>
                        <div>Настройки</div>
                    </div>
                    <div className={style.requests}>
                        <Request />
                    </div>
                </Col>
                <Col span={3}></Col>
            </Row>
        </div>
    )
}