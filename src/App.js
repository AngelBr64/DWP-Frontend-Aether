import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
