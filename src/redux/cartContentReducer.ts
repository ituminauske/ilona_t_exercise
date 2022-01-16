import { RootState } from "./store";

const CART_CONTENT_KEY = "cartContentKey"

export type CartContentState = {
     [key: string]: number
}

interface ICartContentAction {
    type: typeof CART_CONTENT_KEY,
    payload: CartContentState
}

export const cartContentReducer = (state: CartContentState = {}, action: ICartContentAction) => {
    if (action.type === CART_CONTENT_KEY) {
        return action.payload;
    } else return state;
}

export const onCartContentChange = (cartContent: CartContentState): ICartContentAction => ({
    type: CART_CONTENT_KEY,
    payload: cartContent
})

export const getCartContent = (state: RootState) => {
    if (state.cartContent) {
        return state.cartContent
    } else return {};
}
