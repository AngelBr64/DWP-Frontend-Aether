import React, { useState } from 'react';
import { Layout, Menu, Input, Button, Card, Avatar, Modal } from 'antd';
import { UserOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Usa useNavigate en lugar de useHistory
import MainLayout from '../../Layouts/MainLayout';

const { Header, Content, Sider } = Layout;

// Estilos para la imagen
const styles = {
    image: {
        height: '40px', // Ajusta la altura de la imagen
        width: 'auto',  // Mantén la proporción de la imagen
    },
};

const DashboardPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPostContent, setNewPostContent] = useState('');
    const navigate = useNavigate(); // Usa useNavigate para redireccionar

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // Aquí puedes agregar la lógica para guardar la publicación
        console.log('Nueva publicación:', newPostContent);
        setIsModalVisible(false);
        setNewPostContent('');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const goToProfile = () => {
        navigate('/profile'); // Redirige a la página de perfil usando navigate
    };

    return (
        <MainLayout>
            <Layout>
                {/* Barra superior */}
                <Header style={{ backgroundColor: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={require('../../assets/img/Aether.png')} alt="Aether" style={styles.image} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <Button type="text" icon={<SearchOutlined />} />
                        <Button type="text" icon={<BellOutlined />} />
                        <Button type="text" icon={<UserOutlined />} onClick={goToProfile} /> {/* Botón para ir al perfil */}
                    </div>
                </Header>

                <Layout>
                    {/* Menú lateral */}
                    <Sider width={200} style={{ backgroundColor: '#fff' }}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
                            <Menu.Item key="1">Opción 1</Menu.Item>
                            <Menu.Item key="2">Opción 2</Menu.Item>
                            <Menu.Item key="3">Opción 3</Menu.Item>
                            <Menu.Item key="4">Opción 4</Menu.Item>
                            <Menu.Item key="5">Opción 5</Menu.Item>
                            <Menu.Item key="6">Opción 6</Menu.Item>
                            <Menu.Item key="7">Opción 7</Menu.Item>
                        </Menu>
                    </Sider>

                    {/* Contenido principal */}
                    <Content style={{ padding: '24px' }}>
                        {/* Botón para agregar publicación */}
                        <div style={{ marginBottom: 16 }}>
                            <Button type="primary" onClick={showModal}>
                                Agregar
                            </Button>
                        </div>

                        {/* Publicación de prueba 1 */}
                        <Card style={{ marginBottom: 16 }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                                <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
                                <span style={{ fontWeight: 'bold' }}>Fulantio de tal</span>
                            </div>
                            <p>Descripción completa</p>
                            <div style={{ display: 'flex', gap: 16 }}>
                                <Button type="text" icon={<span>👍</span>}>Me gusta</Button>
                                <Button type="text" icon={<span>💬</span>}>Comentar</Button>
                            </div>
                        </Card>

                        {/* Publicación de prueba 2 */}
                        <Card style={{ marginBottom: 16 }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                                <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
                                <span style={{ fontWeight: 'bold' }}>Fulantio de tal 2</span>
                            </div>
                            <p>Descripción completa</p>
                            <div style={{ display: 'flex', gap: 16 }}>
                                <Button type="text" icon={<span>👍</span>}>Me gusta</Button>
                                <Button type="text" icon={<span>💬</span>}>Comentar</Button>
                            </div>
                        </Card>

                        {/* Caso de publicación */}
                        <Card style={{ marginBottom: 16 }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                                <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
                                <span style={{ fontWeight: 'bold' }}>Caso de publicación</span>
                            </div>
                            <p>Hación a salida de página</p>
                            <p>A seguir publicaron</p>
                            <div style={{ display: 'flex', gap: 16 }}>
                                <Button type="text" icon={<span>👍</span>}>Me gusta</Button>
                                <Button type="text" icon={<span>💬</span>}>Comentar</Button>
                            </div>
                        </Card>
                    </Content>
                </Layout>
            </Layout>

            {/* Modal para agregar publicación */}
            <Modal title="Agregar publicación" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input.TextArea
                    placeholder="Escribe tu publicación aquí"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={4}
                />
            </Modal>
        </MainLayout>
    );
};

export default DashboardPage;