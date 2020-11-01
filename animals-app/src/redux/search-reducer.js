import axios from "axios"

export const SET_FILTER = 'SEARCH/SET-FILTER'
export const SET_CURRENT_PAGE = 'SEARCH/SET_CURRENT_PAGE'


let initialState = {
    filter: {},
    animals: [],
    currentPage: 1,
    pageCount: 0,
    search: '',
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter,
                currentPage: action.page,
                animals: action.animals,
                pageCount: action.pageCount,

            }
        default:
            return state
    }
}



const SetFilterAC = (filter, animals, page, pageCount) => ({
    type: SET_FILTER,
    filter,
    animals,
    page,
    pageCount,
})

export const SetFilterTC = (filter, page, search) => {
    return async (dispatch) => {
        let obj = {
            filters: filter,
            page,
            search,
        }
        debugger
        let data = await axios.post('http://165.22.192.77/s2b/api/v1/filtered_animals/',obj)
        debugger
        dispatch(SetFilterAC(data.data.filters, data.data.animals, page, data.data.total_page_count))
        debugger
    }
}

