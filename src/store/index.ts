import { configureStore } from '@reduxjs/toolkit'
import {reducers} from './reducers/index';
export const store = configureStore({
  reducer: reducers,
})
//to know type of store
export type RootState = ReturnType<typeof store.getState>;
//to konw type of dispatch
export type AppDispatch = typeof store.dispatch;