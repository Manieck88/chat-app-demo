import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import UserListItem from 'components/chat/user-list-item.component';
import { setActiveUser } from 'store/chat';
import SearchBar from 'components/shared/search-bar.component';

const UsersList = () => {
    const { users, activeUser } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();

    const [filterValue, setFilterValue] = useState('');

    function onChange(val: string) {
        setFilterValue(val);
    }

    const filteredUsers = filterValue
        ? users?.filter(
              (user) =>
                  user.name.first.toUpperCase().includes(filterValue.toUpperCase()) ||
                  user.name.last.toUpperCase().includes(filterValue.toUpperCase()),
          )
        : users;

    return (
        <div id="users-list" className="d-flex flex-column border-end">
            <SearchBar onChangeFn={onChange} value={filterValue} />

            <div className="h-100 overflow-auto">
                {users &&
                    filteredUsers?.map((user) => (
                        <UserListItem
                            user={user}
                            lastMessage="test message"
                            key={user.phone}
                            selectUserFn={() => dispatch(setActiveUser(user.phone))}
                            isActive={activeUser?.phone === user.phone}
                        />
                    ))}
            </div>
        </div>
    );
};

export default UsersList;
