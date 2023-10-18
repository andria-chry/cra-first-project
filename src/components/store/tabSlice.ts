// src/store/tabSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabState {
    activeTab: string | null;
    activeInnerTab: string | null;
}

const initialState: TabState = {
    activeTab: null,
    activeInnerTab: null,
};

const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload;
        },
        setActiveInnerTab: (state, action: PayloadAction<string | null>) => {
            state.activeInnerTab = action.payload;
        },
    },
});

export const { setActiveTab, setActiveInnerTab } = tabSlice.actions;

export default tabSlice.reducer;

