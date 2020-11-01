import React, {useEffect, useReducer} from 'react'
import style from './App.scss'
import axios from 'axios'

import { Layout } from 'antd'
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import {Home} from "./components/Home/Home";
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";
import withRouter from "react-router-dom/es/withRouter";
import appReducer, {SetNavigationAC} from "./redux/app-reducer";
import {connect, useDispatch, useSelector} from "react-redux";
import {About} from "./components/About/About";
import {LK} from "./components/LK/LK";
import {LoginAlert} from "./components/LoginAlert/LoginAlert";
import {getIsLoginAlert} from "./redux/app-selector";
import {getIsAuth} from "./redux/auth-selector";
import {SetMeTC} from "./redux/auth-reducer";

const {Content } = Layout

export const App = (props) => {
    const isLoginAlert = useSelector(getIsLoginAlert)
    const isAuth = useSelector(getIsAuth)
  return (
      <div className={style.wrapper}>
          {
              isLoginAlert && !isAuth &&
              <LoginAlert/>
          }
          <Header />
          <Content style={{background:'rgba(0,0,0,0) !important'}}>
              <Route path ='/about' render={()=> {
                  return <About />;
              }} />
              <Route exact path ='/' render={()=> {
                  return <Home />;
              }} />
              <Route exact path ='/search' render={()=> {
                  return <Search />;
              }} />
              <Route path ='/search/account' render={()=> {
                  return <Account />;
              }} />
              <Route path ='/profile' render={()=> {
                  return <LK />;
              }} />
          </Content>
          <Footer />
      </div>
  )
}

class AppContainer extends React.Component{
    componentDidMount() {
        this.props.SetMeTC()
    }

    render() {
        return <App />
    }
}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
})

export default connect(mapStateToProps, {SetMeTC})(AppContainer);