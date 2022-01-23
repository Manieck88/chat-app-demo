import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers } from './thunk-actions';
import User from 'types/user.types';

interface UsersState {
    loading: 'pending' | 'complete' | 'fail';
    users?: User[];
    activeUser?: User;
}

const initialState: UsersState = {
    loading: 'pending',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setActiveUser: (state: UsersState, action: PayloadAction<string>) => {
            const activeUser = state.users?.find((user) => user.phone === action.payload);
            return { ...state, activeUser };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            return { ...state, users: action.payload, activeUser: action.payload[0], loading: 'complete' };
        });
        builder.addCase(getUsers.rejected, (state, _action: PayloadAction<unknown>) => {
            return { ...state, loading: 'fail' };
        });
    },
});

export const { setActiveUser } = usersSlice.actions;
export const { reducer: users } = usersSlice;
