import React from 'react';
import { Layout, Card, Avatar, Button, Row, Col } from 'antd';
import { UserOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import MainLayout from '../../Layouts/MainLayout';

const { Header, Content } = Layout;

const ProfilePage = () => {
    return (
        <MainLayout>
            <Layout>
                {/* Barra superior */}
                <Header style={{ backgroundColor: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={require('../../assets/img/Aether.png')} alt="Aether" style={{ height: '40px', width: 'auto' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <Button type="text" icon={<SearchOutlined />} />
                        <Button type="text" icon={<BellOutlined />} />
                        <Button type="text" icon={<UserOutlined />} />
                    </div>
                </Header>

                {/* Contenido principal de la página de perfil */}
                <Content style={{ padding: '24px' }}>
                    {/* Información del perfil */}
                    <Card style={{ marginBottom: 16 }}>
                        <Row gutter={16} align="middle">
                            <Col>
                                <Avatar icon={<UserOutlined />} size={64} />
                            </Col>
                            <Col>
                                <h2>Fulantio de tal</h2>
                                <p>Descripción completa</p>
                            </Col>
                        </Row>
                        <div style={{ marginTop: 16 }}>
                            <Button type="primary">Editar perfil</Button>
                        </div>
                    </Card>

                    {/* Publicaciones del usuario */}
                    <Card style={{ marginBottom: 16 }}>
                        <h3>Publicaciones</h3>
                        
                    </Card>

                    {/* Acciones adicionales */}
                    <Card>
                        <Row gutter={16}>
                            <Col>
                                <Button type="text" icon={<span>👍</span>}>Me gusta</Button>
                            </Col>
                            <Col>
                                <Button type="text" icon={<span>💬</span>}>Comentar</Button>
                            </Col>
                            <Col>
                                <Button type="text" icon={<span>🔌</span>}>Apagar</Button>
                            </Col>
                        </Row>
                    </Card>
                </Content>
            </Layout>
        </MainLayout>
    );
};

export default ProfilePage;