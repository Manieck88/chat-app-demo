import React from 'react';
import { format } from 'date-fns';
import { InfoCircle } from 'react-bootstrap-icons';

interface UserDetailsInfoProps {
    phoneNumber: string;
    dateOfBirth: Date;
    nationality: string;
}

const UserDetailsInfo = ({ phoneNumber, dateOfBirth, nationality }: UserDetailsInfoProps) => {
    return (
        <div className="p-5 d-flex flex-column border-bottom">
            <div className="d-flex align-items-center mx-auto pb-4">
                <InfoCircle className="me-2 text-primary" />
                <p className="fs-md mb-0 text-secondary">INFORMATION</p>
            </div>
            <div className="w-100">
                <div className="d-flex justify-content-between fs-sm text-secondary p-2">
                    <p>Tel:</p>
                    <p>{phoneNumber}</p>
                </div>
                <div className="d-flex justify-content-between border-top border-bottom fs-sm text-secondary p-2">
                    <p>Date Of Birth:</p>
                    <p>{format(dateOfBirth, 'dd-MM-yyyy')}</p>
                </div>
                <div className="d-flex justify-content-between fs-sm text-secondary p-2">
                    <p>Nationality:</p>
                    <p>{nationality}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsInfo;
