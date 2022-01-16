import {RootState} from "./store";

const CART_VALUE_KEY = "cartValueKey"

type CartValueState =  number

interface ICartValueAction {
    type : typeof CART_VALUE_KEY,
    payload : CartValueState
}

export const cartValueReducer = (state : CartValueState = 0, action : ICartValueAction) => {
    if(action.type===CART_VALUE_KEY){
        return action.payload;
    } else return state;
}

export const onCartValueChange = (cartValue : number):ICartValueAction =>({
    type : CART_VALUE_KEY,
    payload : cartValue
})

export const getCartValue = (state : RootState) => {
    if(state.cartValue) {
        return state.cartValue
    } else return 0;
}