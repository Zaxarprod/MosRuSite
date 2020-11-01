import React from "react"
import style from './Search.module.scss'
import Navigation from "../Navigation/Navigation";
import {Col, Row} from "antd";
import {SearchBlock} from "./SearchBlock/SearchBlock";
import {Cart} from "./Cart/Cart";
import img from './../../common/images/block4/Rectangle 36.png'
import {Paginator} from "./Paginator/Paginator";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import {getAnimals, getCurrentPage, getFilter, getPageCount, getSearchStr} from "../../redux/search-selector";
import {SetFilterTC} from "../../redux/search-reducer";
import {SetCartTC} from "../../redux/account-reducer";
import {Loader} from "../Loader/Loader";

export const URL = 'http://165.22.192.77/'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            filter: this.props.filter,
            animals: this.props.animals,
            count: this.props.count,
            currentPage: this.props.currentPage,
            search: this.props.search,
        }
        debugger
    }
    componentWillMount() {
        if(!Object.keys(this.state.filter)){
            this.props.SetFilterTC(this.state.filter, 1, this.props.search)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if(!Object.keys(this.state.filter)){
            this.props.SetFilterTC(this.state.filter, 1, this.props.search)
        }
        if ((prevProps.filter !== this.props.filter)) {
            this.setState({
                filter: this.props.filter,
                count: this.props.count,
                search: this.props.search,
            })
        }
        if (prevProps.animals !== this.props.animals) {
            this.setState({
                animals: this.props.animals,
            })
        }
        if (prevProps.currentPage !== this.props.currentPage) {
            this.setState({
                currentPage: this.props.currentPage,
            })
        }
    }
    func = (value) => {
        this.props.SetFilterTC(this.state.filter, value, this.props.search)
    }
    render() {
        if(!Object.keys(this.props.filter).length){
            return (<Loader />)
        }
        return (
            <div className={style.searchPage}>
                <Row className={style.nav}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Navigation />
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <div className={style.searchBlock}>
                    <SearchBlock filter={this.state.filter}/>
                </div>
                <Row>
                    <Col span={3}></Col>
                    <Col span={18} className={style.mainBlock}>
                        <div className={style.filterBlock}>
                            {this.state.filter && Object.keys(this.state.filter).map(el => {
                                return (
                                    <div className={style.filter}>
                                        <p><b>{el}</b></p>
                                        <ul>
                                            {
                                                (this.state.filter[el]===true || this.state.filter[el]===false)?
                                                    (
                                                        <li>
                                                                <div
                                                                className={this.state.filter[el]? style.select : ''}
                                                                onClick={async () => {
                                                                    await this.setState({
                                                                        filter: {
                                                                            ...this.state.filter,
                                                                            [el]: !this.state.filter[el],
                                                                        }
                                                                    })
                                                                    this.props.SetFilterTC(this.state.filter, 1, this.props.search)
                                                            }}
                                                                ></div>
                                                        </li>
                                                    ):
                                                Object.keys(this.state.filter[el]).map(elem => {
                                                    return (
                                                        <li>
                                                            <div
                                                                className={this.state.filter[el][elem] ? style.select : ''}
                                                                onClick={async () => {
                                                                    await this.setState({
                                                                        filter: {
                                                                            ...this.state.filter,
                                                                            [el]: {
                                                                                ...this.state.filter[el],
                                                                                [elem]: !this.state.filter[el][elem],
                                                                            }
                                                                        }
                                                                    })
                                                                    this.props.SetFilterTC(this.state.filter, 1, this.props.search)
                                                                }}
                                                            ></div>
                                                            <p>{elem}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={style.animals}>
                            {
                                this.state.animals.map(el => {
                                    console.log(el)
                                    return (
                                        <div>
                                            <NavLink to={`/search/account/${el.animal_accounting_card}`}>
                                                <Cart name={el.animal_name}
                                                      img={URL + `media/photos/${el.animal_accounting_card}}.jpg`}
                                                      description={`${el.sex==='f'?'Девочка':'Мальчиfdк'} / ${el.birth_date}`}/>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row>
                    <Col span={3}></Col>
                    <Col span={5}>
                    </Col>
                    <Col span={13} className={style.paginator}>
                        <Paginator count={this.state.count} current={this.state.currentPage} func={this.func}/>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    filter: getFilter(state),
    animals: getAnimals(state),
    count: getPageCount(state),
    currentPage: getCurrentPage(state),
    search: getSearchStr(state),
})

class SearchContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filter: this.props.filter,
            animals: this.props.animals,
            count: this.props.count,
            currentPage: this.props.currentPage,
            search: this.props.search,
        }
        debugger
    }
    componentDidMount() {
        this.props.SetFilterTC(this.state.filter, 1 ,this.props.search)
    }
    render(){
        return (
            <Search
                filter={this.props.filter}
                animals={this.props.animals}
                count={this.props.count}
                currentPage={this.props.currentPage}
                search={this.props.search}
                SetCartTC={this.props.SetCartTC}
                SetFilterTC={this.props.SetFilterTC}
            />
            )
    }
}

export default connect(mapStateToProps,{SetFilterTC, SetCartTC})(SearchContainer)