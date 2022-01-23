import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteElement } from 'types/routes.types';
import { notAvailable } from 'utils';

const SideNavButton: React.FC<RouteElement> = ({ link, Icon, disabled }) => {
    function handleClick(e: React.MouseEvent): void {
        if (disabled) {
            notAvailable();
            e.preventDefault();
        }
    }

    return (
        <NavLink onClick={handleClick} to={link} className="side-nav__link p-4">
            <Icon />
        </NavLink>
    );
};

export default SideNavButton;
