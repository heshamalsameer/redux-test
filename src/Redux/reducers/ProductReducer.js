import {Action_Types} from "../actions/Action_Types";


const initialState = {
    products : []
}
export const productReducer = (state = initialState,action) => {
    switch (action.type) {
        case Action_Types.SET_PRODUCS :
            return {
                ...state,
                products: action.productInfo
            };
            
        

        default :
        return state;
    }
}

export const selectedProduct = (state={},action) => {
    switch (action.type) {
        case Action_Types.SELECTED_PRODUCT :
            return {
                ...state,
                ...action.product
            };
        case  Action_Types.REMOVE_SELECTED_PRODUCT :
            return {};
        default:
            return state;
    }
}

const initialState2 = {
    cart : []
}

export const productCart = (state = initialState2,action) => {
    switch (action.type) {
        
        case Action_Types.ADD_TO_CART :
            return {
                ...state,
                cart: action.product
            };

        case Action_Types.CLEAR_CART :
            return {};

        default :
        return state;
    }
}
