import React from 'react';
import SideNavButton from 'components/navigation/side-nav-button.component';
import routes from 'routes/routes';

const SideNav: React.FC = () => {
    return (
        <div id="side-nav-container" className="h-100 d-flex flex-column">
            {routes.map((route) => (
                <SideNavButton {...route} key={route.link} />
            ))}
        </div>
    );
};

export default SideNav;
