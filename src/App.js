import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/home" element={<>homepage</>} />
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
}

export default App;
