import React from 'react';
import { Layout } from 'antd';
import AppHeader from './Header';
import AppFooter from './Footer';

const { Content } = Layout;

const MainLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #A7E0C5, #E0F7EF)' }}>
            <Content style={{ padding: '20px' }}>{children}</Content>
            <AppFooter />
        </Layout>
    );
};

export default MainLayout;
