import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { RootState } from 'store';
import { conversations, users } from 'store/chat';

export function renderWithRedux(container: ReactElement, preloadedState: RootState) {
    const store = configureStore<RootState>({ reducer: { users, conversations }, preloadedState });

    const wrapper: React.FC = ({ children }) => {
        return <Provider store={store}>{children}</Provider>;
    };
    return render(container, { wrapper });
}
