import React from "react"
import style from './Account.module.scss'
import {Col, Row} from "antd";
import Navigation from "../Navigation/Navigation";
import Page from "./Page/Page";
import Test from "../Test/Test";
import {connect, useSelector} from "react-redux";
import {getIsTest} from "../../redux/app-selector";
import {getCart} from "../../redux/account-selector";
import {SetCartTC} from "../../redux/account-reducer";
import withRouter from "react-router-dom/es/withRouter";

export const Account = ({acc,id}) => {
    return (
        <div>
            <Row className={style.nav}>
                <Col span={3}></Col>
                <Col span={18}>
                    <Navigation acc={acc} />
                </Col>
                <Col span={3}></Col>
            </Row>
            <Page acc={acc} id={id}/>
        </div>

    )
}

class AccountContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            id: this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]
        }
    }
    componentDidMount() {
        debugger
        this.props.SetCartTC(this.state.id)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.acc !== this.state.acc){
            this.props.SetCartTC(this.state.id)
        }
    }

    render (){
        return <Account
            acc={this.props.acc}
            SetCartTC={this.props.SetCartTC}
            id={this.state.id}
        />
    }
}

let mapStateToProps = (state) => ({
    acc: getCart(state)
})

export default withRouter(connect(mapStateToProps,{SetCartTC})(AccountContainer))