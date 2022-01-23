import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideNav from 'containers/navigation/side-nav.container';
import Router from 'routes/router';
import { Provider } from 'react-redux';
import { store } from 'store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="d-flex h-100 w-100">
                    <SideNav />
                    <Router />
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
