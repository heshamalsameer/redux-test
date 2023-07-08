import { Action_Types } from "./Action_Types";

export function setProducts(productInfo) {

    return(
        {
            type: Action_Types.SET_PRODUCS,
            productInfo : productInfo
        }
    )
}


export function selectedProduct(product) {
    return(
        {
            type: Action_Types.SELECTED_PRODUCT, 
            product: product
        }
    )
}
export function addToCart(product) {
    return(
        {
            type: Action_Types.ADD_TO_CART, 
            product: product
        }
    )
}
export function RemoveProduct() {
    return(
        {
            type: Action_Types.REMOVE_SELECTED_PRODUCT
        }
    )
}
export function ClearCart() {

    return(
        {
            type: Action_Types.CLEAR_CART
        }
    )
}