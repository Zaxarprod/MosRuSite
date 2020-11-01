export const getIsAuth = (state) =>{
    return state.auth.isAuth
}

export const getUser = (state) =>{
    return state.auth.user
}

export const getToken = (state) =>{
    return state.auth.token
}

export const getQuestions = (state) =>{
    return state.auth.questions
}