import React, {useEffect} from "react"
import style from './Page.module.scss'
import {Col, Row} from "antd";
import {Slider} from "../Slider/Slider";
import {useDispatch, useSelector} from "react-redux";
import {SetIsLoginAlert, SetIsTestAC} from "../../../redux/app-reducer";
import {getIsAuth} from "../../../redux/auth-selector";
import {getIsLoginAlert, getIsTest} from "../../../redux/app-selector";
import {LoginAlert} from "../../LoginAlert/LoginAlert";
import {getCart} from "../../../redux/account-selector";
import withRouter from "react-router-dom/es/withRouter";
import {SetCartTC} from "../../../redux/account-reducer";
import Test from "../../Test/Test";

const Page = ({id, acc}) => {

    let dispatch = useDispatch()
    let isAuth = useSelector(getIsAuth)

    let handlerButton = () =>{
        if(isAuth){
            dispatch(SetIsTestAC(true))
        }
        else{
            dispatch(SetIsLoginAlert(true))
        }
    }
    let handlerButton2 = () => {
        if(isAuth){
            //dispatch(SetIsTestAC(true))
        }
        else{
            dispatch(SetIsLoginAlert(true))
        }
    }
    let isTest = useSelector(getIsTest)
    return (
        <>
        {isTest && <Test id={id}/>}
        <Row className={style.account}>
            <Col span={3}></Col>
            <Col span={18}>
                <div className={style.wrapper}>
                    <div className={style.slider}>
                        <Slider acc={acc}/>
                    </div>
                    <div className={style.info}>
                        <h2 className={style.name}>{acc.name}, {acc.birth_date}</h2>
                        {Object.keys(acc).map(el => {
                            return (<p>{el}: {acc[el]}</p>)
                        })}
                        <hr/>
                        <h4>Описание</h4>
                        <p className={style.description}>
                            {acc.animal_bio}
                        </p>
                        <div className={style.buttons}>
                            <div onClick={handlerButton}>Забрать питомца</div>
                            <div onClick={handlerButton2}>Добавить в избранное</div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={3}></Col>
        </Row>
            </>
    )
}

export default Page