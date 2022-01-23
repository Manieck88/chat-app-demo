import React from 'react';
import { useAppSelector } from 'hooks';
import { conversationsSelectors } from 'store/chat';
import SingleMessage from 'components/chat/single-message.component';

interface ConversationProps {
    userId: string;
}

const Conversation = ({ userId }: ConversationProps) => {
    const { activeUser } = useAppSelector((state) => state.users);
    const entity = useAppSelector((state) => conversationsSelectors.selectById(state.conversations, userId));

    if (!entity) return <></>;

    return (
        <div className="h-100 w-100 overflow-auto p-5">
            {entity.messages.map((message) => (
                <SingleMessage message={message} userImage={activeUser?.picture.thumbnail} key={message.timeStamp} />
            ))}
        </div>
    );
};

export default Conversation;
