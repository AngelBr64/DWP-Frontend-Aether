import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MainLayout from '../../Layouts/MainLayout';

const LoginPage = () => {
    return (
        <MainLayout>
            <div style={styles.container}>
                <Card style={styles.card}>
                    <img src={require('../../assets/img/Aether.png')} alt="Aether" style={styles.image} />
                    <LoginForm />
                    <div style={styles.linkContainer}>
                        <span>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></span>
                    </div>
                </Card>
            </div>
        </MainLayout>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    card: {
        width: 400,
        margin: 'auto',
        textAlign: 'center',
    },
    image: {
        width: '50%',
        height: 'auto',
        marginBottom: 20,
    },
    linkContainer: {
        marginTop: 16,
        textAlign: 'center',
    },
};

export default LoginPage;
