export const SET_NAVIGATION = 'APP/SET-NAVIGATION'
export const SET_ISTEST = 'APP/SET-ISTEST'
export const SET_IS_LOGIN_ALERT = 'APP/SET_IS_LOGIN_ALERT'
export const SET_CURRENT_PAGE = 'APP/SET_CURRENT_PAGE'

export const URL = 'http://165.22.192.77/'

let initialState= {
    navigation: [{
        name: 'Главная страница',
        src: '/',
    },],
    currentPage: {},
    isTest: false,
    isLoginAlert: false,
    path: '/',
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            let nav = state.navigation
            nav.pop()
            nav.push({
                name: action.value.name,
                src: `/search/account/${action.value.id}`
            })
            return {
                ...state,
                //navigation: nav,
                currentPage: action.value,
            }
        }
        case SET_IS_LOGIN_ALERT: {
            return {
                ...state,
                isLoginAlert: action.value,
            }
        }
        case SET_ISTEST: {
            return {
                ...state,
                isTest: action.value,
            }
        }
        case SET_NAVIGATION:
            let arr = action.value.split('/')
            let nav = [{
                    name: 'Главная страница',
                    src: '/',
                },]
            arr.map(el=>{
                switch (el) {
                    case 'search':
                        nav.push({
                            name: 'Найти друга',
                            src: '/search'
                        })
                        break
                    case 'about':
                        nav.push({
                            name: 'О проекте',
                            src: '/about'
                        })
                        break
                    case 'contacts':
                        nav.push({
                            name: 'Контакты',
                            src: '/contacts'
                        })
                        break
                    case 'account':
                        debugger
                        nav.push({
                            name: state.currentPage.name,
                            src:  `/search/account/${state.currentPage.id}`,
                        })
                        break
                    case 'profile':
                        nav.push({
                            name: 'Личный кабинет',
                            src:  `/profile`,
                        })
                        break
                    default:
                        break
                }
            })
            return {
                ...state,
                navigation: [...nav],
                path: action.value,
            }
        default:
            return state
    }
}

export const SetCurrentPageAC = (value) => ({
    type: SET_CURRENT_PAGE,
    value,
})

export const SetNavigationAC = (value) => ({
    type: SET_NAVIGATION,
    value,
})

export const SetIsLoginAlert = (value) => ({
    type: SET_IS_LOGIN_ALERT,
    value,
})

export const SetIsTestAC = (value) => ({
    type: SET_ISTEST,
    value,
})

export default appReducer