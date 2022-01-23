import { createAsyncThunk } from '@reduxjs/toolkit';
import { asyncTimeout } from 'utils';
import axios from 'services/axios';
import { GetUsersResponse } from 'types/api.types';

export const getUsers = createAsyncThunk('getUsers', async () => {
    const response = await axios.get<GetUsersResponse>('api/', { params: { results: 10 } });
    return response.data.results;
});

interface ReceiveMessageParams {
    id: string;
    message: string;
}

export const receiveMessage = createAsyncThunk('receiveMessage', async ({ id, message }: ReceiveMessageParams) => {
    // I know that it should be signalR or other observable pattern solution but for assignment purpose it should be sufficient :)
    const response = await asyncTimeout(
        { id, message: { type: 'RECEIVED' as const, text: message, timeStamp: Date.now() } },
        1500,
    );

    return response;
});
