import { createStore, combineReducers } from "redux";
import { cartValueReducer } from "./cartValueReducer";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorageInteractionFunctions";
import { cartContentReducer } from "./cartContentReducer";

export const rootReducer = combineReducers(
    {
        cartValue: cartValueReducer,
        cartContent: cartContentReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;