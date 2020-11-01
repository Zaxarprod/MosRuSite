import React, {useState} from "react"
import style from './Login.module.scss'
import {Field, Form, Formik} from "formik"
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import {useDispatch, useSelector} from "react-redux";
import {LoginTC, LogoutAC, LogoutTC} from "../../../redux/auth-reducer";
import {getIsAuth, getToken, getUser} from "../../../redux/auth-selector";
import {NavLink} from "react-router-dom";
import {SetIsLoginAlert} from "../../../redux/app-reducer";

export const Login = () => {
    const [isOpened, setIsOpened] = useState(false)
    let dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)
    const token = useSelector(getToken)
    const user = useSelector(getUser)
    const [isOpenedUser, setIsOpenedUser] = useState(false)
    return (
        <div className={style.wrapper}>
            {!isAuth && <>
            <div className={style.reg}>
                <a href={'https://login.mos.ru/sps/reg'}>
                    Регистрация
                </a>
            </div>
            <div className={style.login}>
                <div onClick={()=>{
                    setIsOpened(!isOpened)
                    dispatch(SetIsLoginAlert(true))
                }}>
                    Войти
                </div>
            </div>
                {/*{isOpened &&
            <div className={style.formBlock}>
                <div className={style.cancel} onClick={()=>{
                    setIsOpened(false)
                }}>
                    <CloseOutlined />
                </div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {}}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(LoginTC(values.email,values.password))
                        setSubmitting(false)
                    }}

                >

                    {({ isSubmitting }) => (
                        <Form className={style.form}>
                            <h3>ВХОД</h3>
                            <Field type="text" name="email" placeholder={'Логин'}/>
                            <Field type="password" name="password" placeholder={'Пароль'}/><br/>
                            <div>
                                <button type="submit" disabled={isSubmitting}>
                                    Войти
                                </button>
                                <a>
                                    Регистрация
                                </a>
                            </div>
                            <a>
                                Забыли пароль?
                            </a>
                        </Form>

                    )}

                </Formik>
            </div>
            }*/}
            </>
            }
            {
                isAuth && user &&
                <>
                    <div>
                        {user.username}
                    </div>
                    <div className={style.userBlock}
                         onClick={()=>{
                            setIsOpenedUser(!isOpenedUser)
                         }
                    }>
                    </div>
                    <div className={style.list + ` ${isOpenedUser?style.openList:style.closeList}`} onClick={
                        ()=>{
                            setIsOpenedUser(false)
                        }
                    }>
                        <div>
                            <NavLink to={'/profile'}
                                      style={{textDecoration:'none', color: 'white'}}>
                            Личный кабинет
                            </NavLink>
                        </div>
                        <div
                            onClick={()=>{
                                dispatch(LogoutTC())
                            }}
                        >
                            Выход
                        </div>
                    </div>
                </>
            }
        </div>
    )
}