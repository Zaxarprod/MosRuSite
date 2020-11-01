import React, {useEffect} from "react"
import style from './Navigation.module.scss'
import {NavLink} from "react-router-dom";
import {getNavigation, getPath} from "../../redux/app-selector";
import withRouter from "react-router-dom/es/withRouter"
import {SetNavigationAC} from "../../redux/app-reducer";
import {connect} from 'react-redux'
import {getCart} from "../../redux/account-selector";

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pages: this.props.pages,
            path: this.props.path,
            acc: this.props.acc
        }
    }
    componentDidMount(){
        this.props.SetNavigationAC(this.props.location.pathname)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.pages!==this.props.pages){
            this.setState({
                pages: this.props.pages,
            })
        }
    }

    render(){
        return (
            <div className={style.wrapper}>
                {this.state.pages.map((el,i)=>{
                    return (<NavLink to={el.src} key={i}>{el.name}{(this.state.pages.length-1)===i?'':' / '}</NavLink>)
                })}
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    pages: getNavigation(state),
    path: getPath(state),
    acc: getCart(state)
})

export default withRouter(connect(mapStateToProps,{SetNavigationAC})(Navigation))
