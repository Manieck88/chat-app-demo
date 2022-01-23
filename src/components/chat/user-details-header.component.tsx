import React from 'react';

interface UserDetailsHeaderProps {
    image: string;
    fullName: string;
    address: string;
}

const UserDetailsHeader = ({ image, fullName, address }: UserDetailsHeaderProps) => {
    return (
        <div className="user-details-header d-flex flex-column pt-5 border-bottom">
            <img src={image} alt="" className="rounded-circle mx-auto mb-4" />
            <p className="mb-0 mx-auto fs-lg fw-bold text-primary">{fullName}</p>
            <p className="fs-sm fw-light mx-auto text-secondary pb-4">{address}</p>
        </div>
    );
};

export default UserDetailsHeader;
