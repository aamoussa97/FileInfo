import {
    AppstoreOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, MoreOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import React, {useState} from "react";
import FileInfo from "./FileInfo";
import DragAndDrop from "./DragAndDrop";

const { Header, Sider, Content } = Layout;

interface AppProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isDarkMode: boolean;
}

const NavigationBar: React.FC<AppProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(props.isDarkMode);

    const [fileList, setFileList] = useState<File[]>([]);

    const handleFileListChange = (callback) => {
        console.log('callback');
        console.log(callback);

        setFileList(callback);
    }

    return(
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <AppstoreOutlined />,
                            label: 'Settings',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, marginLeft: 15, background: '#FFFFFF' }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#FFFFFF',
                    }}
                >
                    <FileInfo fileList={fileList}/>
                    <DragAndDrop fileList={fileList} handleFileListChange={handleFileListChange}/>
                </Content>
            </Layout>
        </Layout>
    )
}

export default NavigationBar;