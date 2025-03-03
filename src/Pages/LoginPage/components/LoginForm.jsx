import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { login } from '../../../services/authService';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await login(values.email, values.password);
            message.success("Inicio de sesión exitoso");
            window.location.href = "/dashboard"; 
        } catch (error) {
            message.error(error || "Error al iniciar sesión");
        }
        setLoading(false);
    };

    return (
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Correo" name="email" rules={[{ required: true, message: 'Ingresa tu correo' }]}>
                <Input type="email" />
            </Form.Item>

            <Form.Item label="Contraseña" name="password" rules={[{ required: true, message: 'Ingresa tu contraseña' }]}>
                <Input.Password />
            </Form.Item>

            <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading} 
                block 
                style={{ backgroundColor: 'green', borderColor: 'green' }}
            >
                Ingresar
            </Button>

        </Form>
    );
};

export default LoginForm;
