import React from 'react';
import '../App.css';
import {Layout, Avatar, Menu} from 'antd';
import Title from 'antd/lib/typography/Title';
import Mexart from '../components/Mexart';

const { Header, Footer, Sider, Content } = Layout;


function App() {
    return (
        <div className="App">
    <Layout>
    <Header style={{padding:10}}>
    <Avatar style={{float:'right'}} src='./arte.png' />
        <Title style={{color:'white'}} level={3}>M E X A R - T</Title>
    </Header>
        <Layout>
        <Sider>
            <Menu
                defaultSelectedKeys={['Usuarios']}
            >
                <Menu.Item key='Usuarios'>
                  Usuarios
                </Menu.Item>

                <Menu.Item key='Artesanos'>
                  Artesanos
                </Menu.Item>

                <Menu.Item key='Talleres'>
                  Talleres
                </Menu.Item>

                <Menu.Item key='Productos'>
                  Productos
                </Menu.Item>

                <Menu.Item key='Ventas'>
                  Ventas
                </Menu.Item>
               
            </Menu>
        </Sider>
            <Layout>
                <Content style={{ padding: '0 50px'}}>
                        <div className="prueba">
                            <Mexart/>
                        </div>
                </Content>

                <Footer style={{ textAlign: 'center'}}>U T V T  en colaboracion con  M E X A R - T</Footer>
            </Layout>
        </Layout>
            
    </Layout>
            
        </div>
    );
}

export default App;