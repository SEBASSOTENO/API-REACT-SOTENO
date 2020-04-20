import React from 'react';
import '../App.css';
import {Layout, Typography, Avatar, Menu} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
    return (
        <div className="App">
            <Layout>
                <Sider style={{background:'red'}}>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;