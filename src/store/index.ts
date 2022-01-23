import { configureStore } from '@reduxjs/toolkit';
import { users, conversations } from './chat';

export const store = configureStore({
    reducer: {
        users,
        conversations,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
