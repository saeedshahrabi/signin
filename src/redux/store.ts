import { applyMiddleware, createStore } from "redux";
import { RootReducer } from "./RootReducer";
import thunkMiddleware from "redux-thunk";



const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(RootReducer,composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
