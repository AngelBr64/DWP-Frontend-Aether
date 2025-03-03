import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { register } from '../../../services/authService';

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await register(values.email, values.password);
            message.success("Registro exitoso, ahora inicia sesión");
            window.location.href = "/login";
        } catch (error) {
            message.error(error || "Error al registrarse");
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

            <Form.Item label="Repite tu contraseña" name="confirmPassword" dependencies={['password']}
                rules={[
                    { required: true, message: 'Confirma tu contraseña' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Las contraseñas no coinciden'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading} 
                block 
                style={{ backgroundColor: 'green', borderColor: 'green' }}
            >
                Registrarse
            </Button>

        </Form>
    );
};

export default RegisterForm;
