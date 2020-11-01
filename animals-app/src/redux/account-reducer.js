import axios from "axios"
import {SetCurrentPageAC} from "./app-reducer";

export const SET_CART = 'ACCOUNT/SET_CART'


let initialState= {
    cart: {},
}

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.cart,
            }
        default:
            return state
    }
}

const SetCartAC = (cart) => ({
    type: SET_CART,
    cart,
})

export const SetCartTC = (id) => {
    return async (dispatch) => {
        let data = await axios.get(`http://165.22.192.77/s2b/api/v1/animal/${id}/`).then(
            res=>{
                dispatch(SetCartAC(res.data.data))
                return res.data.data
            }
        )
        dispatch(SetCurrentPageAC({
            id: data.animal_id,
            name: data.animal_name,
        }))
    }
}