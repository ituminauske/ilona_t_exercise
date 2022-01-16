import { CartContentState } from "./cartContentReducer";
const GLOBAL_WINDOW = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global.global === global && global) || this;

export const saveToLocalStorage = (state: { cartContent: CartContentState, cartValue: number }) => {
    try {
        const { cartContent, cartValue } = state;
        window.localStorage.setItem("cartContent", JSON.stringify(cartContent));
        window.localStorage.setItem("cartValue", cartValue.toString());
    } catch (e) {
        console.warn(e);
    }
}

export const loadFromLocalStorage = () => {
    try {
        const cartContent = GLOBAL_WINDOW?.localStorage?.getItem("cartContent");
        const cartValue = GLOBAL_WINDOW?.localStorage?.getItem("cartValue");
        if (!cartContent && !cartValue){
            return { cartContent: {}, cartValue: 0 };
        } 

        return { cartContent: JSON.parse(cartContent || "{}"), cartValue: Number.parseFloat(cartValue || "0") };

    } catch (e) {
        console.warn(e);
        return { cartContent: {}, cartValue: 0 };
    }
}
