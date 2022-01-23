import React from 'react';
import { Person } from 'react-bootstrap-icons';

interface ThumbnailProps {
    src?: string;
}

const Thumbnail = ({ src }: ThumbnailProps) => {
    return (
        <>
            {src ? (
                <img src={src} alt="user-pic" className="users-list-image rounded-circle" />
            ) : (
                <div className="thumbnail-image rounded-circle bg-primary d-flex">
                    <Person width={32} height={32} className="text-white m-auto" />
                </div>
            )}
        </>
    );
};

export default Thumbnail;
