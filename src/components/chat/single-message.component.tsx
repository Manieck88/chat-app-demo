import React from 'react';
import { format } from 'date-fns';
import { UserMessage } from 'types/user.types';
import Thumbnail from 'components/shared/thumbnail.component';

interface SingleMessageProps {
    message: UserMessage;
    userImage?: string;
}

const SingleMessage = React.memo(({ message, userImage }: SingleMessageProps) => {
    const isSent = message.type === 'SENT';

    return (
        <div className={`d-flex ${isSent ? 'flex-row-reverse' : ''}`}>
            <div>
                <Thumbnail src={isSent ? undefined : userImage} />
                <p className="fs-xs text-secondary text-center">{format(message.timeStamp, 'HH:mm')}</p>
            </div>
            <div
                className={`message-text mx-4 py-3 px-4 rounded position-relative ${isSent ? 'sent' : 'received'}`}
                data-testid={`message__container--${isSent ? 'sent' : 'received'}-message`}
            >
                <p className="text-secondary">{message.text}</p>
                <div className="arrow position-absolute" />
            </div>
        </div>
    );
});

export default SingleMessage;
