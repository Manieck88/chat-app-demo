import React from 'react';
import MessagesTopBar from 'components/chat/messages-top-bar.component';
import { useAppDispatch, useAppSelector } from 'hooks';
import Conversation from 'containers/chat/conversation.container';
import MessagesBottomBar from 'components/chat/messages-bottom-bar.component';
import { notAvailable } from 'utils';
import { receiveMessage, updateConversation } from 'store/chat';

const Messages = () => {
    const { activeUser } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();

    if (!activeUser) return <></>;

    function sendMessage(text: string) {
        dispatch(
            updateConversation({
                id: activeUser?.phone as string,
                message: {
                    type: 'SENT',
                    text,
                    timeStamp: Date.now(),
                },
            }),
        );

        dispatch(receiveMessage({ id: activeUser?.phone as string, message: text }));
    }

    return (
        <div id="messages" className="w-100 d-flex flex-column">
            <MessagesTopBar userName={`${activeUser.name.first} ${activeUser.name.last}`} />
            <Conversation userId={activeUser.phone} />
            <MessagesBottomBar onSentFn={sendMessage} addAttachment={notAvailable} addEmoticon={notAvailable} />
        </div>
    );
};

export default Messages;
