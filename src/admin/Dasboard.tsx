import { LaptopOutlined, PhoneOutlined, TabletFilled,SearchOutlined, AudioOutlined, SettingOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import LogoImg from '../assets/image/anhhtus-logo 2.png'
const { Header, Content, Sider } = Layout;
const item3: MenuProps['items'] = [
    { key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin">Điện thoại</Link> },
    { key: "laptop", icon: <LaptopOutlined />, label: "Laptop" },
    { key: "tablet", icon: <TabletFilled />, label: "Máy tính bảng" },
    { key: "audio", icon: <AudioOutlined />, label: "Âm thanh" },
   
]
const item4:InputCustum['items']  =[
    { key: 'search',icon:<SearchOutlined /> }
]

const Dasboard = () => (
    <Layout>
        <HeaderCusturm >
            <Logo src={LogoImg} />
            <H4>Dasboard</H4>
            <InputCustum size="large" placeholder="Tìm kiếm" items={item4} />
            <H2>Xin chào huong</H2>         
        </HeaderCusturm>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                    items={item3}
                />
            </Sider>
            
            <Layout
                style={{
                    padding: '0 24px 24px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

const HeaderCusturm = styled.header`
    height: 64px;
left: -58px;
top: 1px;
border-radius: 0px;
background: #00B0D7;

`
const H4 = styled.h4`

position: absolute;
width: 83px;
height: 25px;
left: 101px;
top: 20px;

height: 25px;
width: 83px;
left: 101px;
top: 20px;
border-radius: nullpx;

/* identical to box height, or 156% */
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;





`
const Logo = styled.img`
    position: absolute;
width: 65px;
height: 57px;
left: 24px;
top: 4px;

background: url(anhhtus-logo.png);
`
const InputCustum = styled.input`
position: absolute;
width: 508px;
height: 34px;
left: 251px;
top: 12px;

background: #FFFFFF;
border-radius: 10px 10px 10px 10px;

`
const H2 = styled.h2`
    font-family: Poppins;
font-size: 20px;
font-weight: 600;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
position: absolute;
width: 197px;
height: 30px;
left: 1228px;
top: 18px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;

`

export default Dasboard;