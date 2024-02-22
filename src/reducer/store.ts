import { configureStore } from "@reduxjs/toolkit";
import {calculatorRes} from './tools/calculator'
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    calculatorRes,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type useDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;