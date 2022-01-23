import React from 'react';
import UserDetailsHeader from 'components/chat/user-details-header.component';
import UserDetailsInfo from 'components/chat/user-details-info.component';
import { useAppSelector } from 'hooks';

const UserDetails = () => {
    const { users, activeUser } = useAppSelector((state) => state.users);

    if (!users || !activeUser) return <></>;

    return (
        <div id="user-details" className="border-start">
            <UserDetailsHeader
                image={activeUser.picture.large}
                fullName={`${activeUser.name.first} ${activeUser.name.last}`}
                address={`${activeUser.location.city}, ${activeUser.location.country}`}
            />
            <UserDetailsInfo
                phoneNumber={activeUser.phone}
                dateOfBirth={new Date(activeUser.dob.date)}
                nationality={activeUser.nat}
            />
        </div>
    );
};

export default UserDetails;
