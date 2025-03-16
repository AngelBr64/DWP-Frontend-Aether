import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom'; // Usa useNavigate en lugar de useHistory

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Usa useNavigate para redireccionar

    const onFinish = async (values) => {
        setLoading(true);
        try {
            // Simula un inicio de sesión exitoso
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula una espera de 1 segundo
            message.success("Inicio de sesión exitoso");
            navigate("/dashboard"); // Redirige a la página de dashboard usando navigate
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