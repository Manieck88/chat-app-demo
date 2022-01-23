import React from 'react';
import User from 'types/user.types';
import Thumbnail from 'components/shared/thumbnail.component';

interface UserListItemProps {
    user: User;
    lastMessage: string;
    selectUserFn(): void;
    isActive: boolean;
}

const UserListItem: React.FC<UserListItemProps> = ({ user, lastMessage, selectUserFn, isActive }) => {
    return (
        <div
            className={`users-list-item d-flex p-3 align-items-center border-bottom ${isActive ? 'active' : ''}`}
            onClick={selectUserFn}
        >
            <div className="me-3">
                <Thumbnail src={user.picture.thumbnail} />
            </div>
            <div>
                <p className="fs-sm fw-bold m-0">{`${user.name.first} ${user.name.last}`}</p>
                <p className="fs-xs text-truncate last-message m-0 text-secondary">{lastMessage}</p>
            </div>
        </div>
    );
};

export default UserListItem;
