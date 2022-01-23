import React from 'react';
import { CameraVideo, Star, Telephone } from 'react-bootstrap-icons';
import { notAvailable } from 'utils';

interface MessagesTopBarProps {
    userName: string;
}

const MessagesTopBar = ({ userName }: MessagesTopBarProps) => {
    return (
        <div className="d-flex border-bottom messages-top-bar">
            <div className="py-4 px-5 border-end w-100 d-flex">
                <p className="text-secondary pe-1">Chat with</p>
                <p className="text-primary text-decoration-underline">{userName}</p>
            </div>
            <div className="p-4 text-primary border-end messages-top-bar-icon" onClick={notAvailable}>
                <Telephone width={20} height={20} />
            </div>
            <div className="p-4 text-primary border-end messages-top-bar-icon" onClick={notAvailable}>
                <CameraVideo width={20} height={20} />
            </div>
            <div className="p-4 text-primary messages-top-bar-icon" onClick={notAvailable}>
                <Star width={20} height={20} />
            </div>
        </div>
    );
};

export default MessagesTopBar;
