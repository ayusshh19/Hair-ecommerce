import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/action'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})