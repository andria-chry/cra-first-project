// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './tabSlice';

const store = configureStore({
    reducer: {
        tabs: tabReducer,
        // ... other reducers
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
