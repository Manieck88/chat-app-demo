import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { getUsers } from 'store/chat';
import UsersList from 'containers/chat/users-list.container';
import UserDetails from 'containers/chat/user-details.container';
import Messages from 'containers/chat/messages.container';

export default function ChatPage() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div className="w-100 d-flex">
            <UsersList />
            <Messages />
            <UserDetails />
        </div>
    );
}
