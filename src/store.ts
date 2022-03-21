import { configureStore } from '@reduxjs/toolkit'

import memorySlice from "./Redux/memo/memorySlice";

export const store = configureStore({
    reducer: {
        memory: memorySlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
