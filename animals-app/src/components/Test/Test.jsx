import React from "react"
import style from './Test.module.scss'
import {CloseOutlined} from '@ant-design/icons'
import {useDispatch} from "react-redux";
import {SetIsTestAC} from "../../redux/app-reducer";
import {connect} from "react-redux";
import {SetAnswersTC, SetQuestionsTC} from "../../redux/auth-reducer";
import {getQuestions, getToken, getUser} from "../../redux/auth-selector";
import {getCart} from "../../redux/account-selector";

class Test extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            isStart: false,
            isFinish: false,
            current: 0,
            selected: null,
            answers: [],
            questions: this.props.questions,

        }
    }
    next = (value) => {
        if(this.state.current!==(this.state.questions.length-1)){
            this.setState({
                answers: [...this.state.answers, value],
                current: this.state.current +1,
                selected: null,
            })
        }
        else{
            this.setState({
                answers: [],
                selected: null,
                current:0,
                isFinish: true,
            })
            debugger
            if([...this.state.answers, value].length === this.state.questions.length){
                debugger
                this.props.SetAnswersTC([...this.state.answers, value], this.props.id, this.props.token)
            }
        }
    }
    handlerCancel = () =>{
        this.props.SetIsTestAC(false)
    }
    handlerStart = () => {
        this.setState({
            isStart: true,
        })
    }
    render(){
        return (
            <div className={style.dark}>
                <div className={style.testBlock}>
                    <div className={style.cancel} onClick={this.handlerCancel}>
                        <CloseOutlined />
                    </div>
                    {
                        !this.state.isStart &&
                        (
                            <div className={style.startBlock}>
                                <h3><b>ТЕСТ</b></h3>
                                <p>
                                    Теперь давайте проверим,что вы серьезно настроены обеспечить животному
                                    комфортное<br/>
                                    проживание и безопасность.<br/><br/>
                                    Пройдите наше небольшое тест из {this.state.questions.length} вопросов для
                                    ответсвенных хозяев.
                                </p>
                                <div className={style.button} onClick={this.handlerStart}>
                                    Начать тест
                                </div>
                            </div>
                        )
                    }
                    {
                        this.state.isStart && !this.state.isFinish &&
                        (
                            this.state.questions[this.state.current] && <div className={style.questionBlock}>
                                <h3><b>ВОПРОС {this.state.current + 1}</b></h3>
                                <p>
                                    {Object.keys(this.state.questions[this.state.current])[0]}
                                </p>
                                {this.state.questions[this.state.current][Object.keys(this.state.questions[this.state.current])[0]].map((el,i)=>{
                                    return (
                                        <p style={{marginBottom: '20px'}} className={style.ask} onClick={
                                            ()=>{
                                                this.setState({
                                                    selected: i,
                                                })
                                            }
                                        }>{
                                            (this.state.selected===i)?<b>{i + 1}. {el}</b>:`${i + 1}. ${el}`
                                        }
                                        </p>
                                    )
                                })}
                                {
                                    this.state.selected!==null &&
                                    <div className={style.nextBlock} onClick={()=>{this.next(this.state.selected)}}>
                                        Следующий вопрос
                                    </div>
                                }
                            </div>
                        )
                    }
                    {
                        this.state.isFinish &&
                        (
                            <h3><b>ПОЗДРАВЛЯЕМ! ВЫ УСПЕШНО ПРОШЛИ ТЕСТ</b></h3>
                        )
                    }
                    <p className={style.bottomText}>
                        У вас 3 попытки
                    </p>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    id: getCart(state).animal_id,
    token: getToken(state),
    questions: getQuestions(state),
})
export default connect(mapStateToProps,{SetIsTestAC, SetAnswersTC, SetQuestionsTC})(Test)