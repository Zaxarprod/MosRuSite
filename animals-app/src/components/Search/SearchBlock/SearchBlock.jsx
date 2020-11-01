import React, {useState} from "react"
import style from './SearchBlock.module.scss'
import {Col, Row} from "antd";
import {Navigation} from "../../Navigation/Navigation";
import Search from "antd/es/input/Search";
import {useDispatch, useSelector} from "react-redux";
import {getSearchStr} from "../../../redux/search-selector";
import {SetFilterTC} from "../../../redux/search-reducer";

export const SearchBlock = ({filter}) => {
    const dispatch = useDispatch()
    const SearchStr = useSelector(getSearchStr)
    const [currentSearch, setCurrSearch] = useState(SearchStr)
    let onSearch = (value, event) => {
        debugger
        dispatch(SetFilterTC(filter,1, value))
    }
    let onChange = (e) => {
        setCurrSearch(e.target.value)
    }
    return (
        <Row>
            <Col span={3}></Col>
            <Col span={18} className={style.content}>
                <div className={style.header}>
                    <h2>Фильтр</h2>
                </div>
                <div className={style.search}>
                    <Search placeholder="Поиск по кличке"
                            onSearch={onSearch}
                            enterButton
                            className={style.inputSearch}
                            value={currentSearch}
                            onChange={onChange}
                    />
                </div>
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}