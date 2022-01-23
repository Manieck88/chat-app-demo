import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserMessage } from 'types/user.types';
import { getUsers, receiveMessage } from './thunk-actions';

export interface ConversationEntity {
    id: string;
    messages: UserMessage[];
}

const conversationsAdapter = createEntityAdapter<ConversationEntity>();

const conversationsSlice = createSlice({
    name: 'conversations',
    initialState: conversationsAdapter.getInitialState(),
    reducers: {
        updateConversation(state, action: PayloadAction<{ id: string; message: UserMessage }>) {
            const entity = conversationsAdapter.getSelectors().selectById(state, action.payload.id);

            if (entity !== undefined) {
                const messages = [...entity.messages];
                messages.unshift(action.payload.message);
                conversationsAdapter.updateOne(state, { id: action.payload.id, changes: { messages } });
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            const entities = action.payload.map((user) => {
                return {
                    id: user.phone,
                    messages: [],
                };
            });
            conversationsAdapter.setAll(state, entities);
        });
        builder.addCase(receiveMessage.fulfilled, (state, action) => {
            const entity = conversationsAdapter.getSelectors().selectById(state, action.payload.id);

            if (entity !== undefined) {
                const messages = [...entity.messages];
                messages.unshift(action.payload.message);
                conversationsAdapter.updateOne(state, { id: action.payload.id, changes: { messages } });
            }
        });
    },
});

export const { reducer: conversations } = conversationsSlice;
export const { updateConversation } = conversationsSlice.actions;
export const conversationsSelectors = conversationsAdapter.getSelectors();
