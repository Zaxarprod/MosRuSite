import axios from "axios"

export const LOGIN = 'AUTH/LOGIN'
export const SET_ME = 'AUTH/SET-ME'
export const LOGOUT = 'AUTH/LOGOUT'
export const SET_ANSWERS = 'AUTH/SET_ANSWERS'

let initialState= {
    isAuth: false,
    user: null,
    token: localStorage.getItem('token'),
    answers: [],
    requests: [],
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANSWERS:
            return {
                ...state,
                answers: action.answers,
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                //token: null,
                user: null,
            }
        case LOGIN:
            return {
               ...state,
                isAuth: true,
                //token: action.token,
            }
        case SET_ME:
            debugger
            return {
                ...state,
                user: action.user,
                isAuth: true,
            }
        default:
            return state
    }
}

const SetAnswersAC = (answers) => ({
    type: SET_ANSWERS,
    answers,
})

const LoginAC = (token) => ({
    type: LOGIN,
    token
})

export const LogoutAC = () => ({
    type: LOGOUT,
})

const SetMeAC = (user) => ({
    type: SET_ME,
    user,
})

export const SetAnswersTC = (answers, id) => {
    return async (dispatch) => {
        let obj = {
            answers: answers,
        }
        let data = await axios.post(`http://165.22.192.77/s2b/api/v1/quiz/`,{
            headers:{
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
            data: {
                answers: answers,
                id: id,
            },
        })
        console.log(data)
    }
}

export const SetMeTC = () => {
    return async (dispatch) => {
        debugger
        let data = await axios.get('http://165.22.192.77/s2b/api/v1/auth/users/me/',{
            headers:{
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        }).then(res=>res.data)
        debugger
        dispatch(SetMeAC(data))
    }
}

export const LogoutTC = () => {
    return async (dispatch) => {
        debugger
        /*let data = await axios.post('http://165.22.192.77/s2b/api/v1/auth/token/logout/',{
            headers:{
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        })*/
        localStorage.removeItem('token')
        debugger
        dispatch(LogoutAC())
    }
}

export const LoginTC = (mail, pass) => {
    return async (dispatch) => {
        let data = await axios.post('http://165.22.192.77/s2b/api/v1/auth/token/login/',{
            username: mail,
            password: pass,
        }).then(res=>{
            localStorage.setItem('token', res.data.auth_token);
            return res.data.auth_token
        })
        await dispatch(LoginAC(data))
        dispatch(SetMeTC())
    }
}