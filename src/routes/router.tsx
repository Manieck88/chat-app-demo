import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatPage from 'pages/chat.page';

export default function Router() {
    return (
        <Routes>
            <Route path="/chat" element={<ChatPage />} />
        </Routes>
    );
}
