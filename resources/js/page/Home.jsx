import React, { useState } from "react";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
} from "@ant-design/icons";
import Logo from "../components/Logo";
import MenuList from "../components/MenuList";
import ToggleThemeButton from "../components/ToggleThemeButton";
import UserProfile from "../components/UserProfile";
import PageContent from "../components/PageContent";
import { Space, Layout, theme } from "antd";
const { Header, Sider, Content, Footer } = Layout;

export default function Home() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100%" }}>
            {/* <Sider collapsed={collapsed} className="sidebar" width={250}>
                <Logo></Logo>
                <MenuList></MenuList>
                <ToggleThemeButton></ToggleThemeButton>
            </Sider> */}
            <Layout>
                {/* <Header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        background: colorBgContainer,
                        paddingLeft: "10px",
                        paddingRight: "10px",
                    }}
                >
                    <div>
                        <div
                            onClick={() => setCollapsed(!collapsed)}
                            style={{ cursor: "pointer", fontSize: "20px" }}
                        >
                            {collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )}
                        </div>
                    </div>
                    <div className="ant-layout-header-right">
                        <Space size="middle" className="ant-space-between">
                            English
                            <UserProfile />
                        </Space>
                    </div>
                </Header> */}
                <Content>
                    <div style={{ padding: "10px" }}>
                        <PageContent></PageContent>
                    </div>
                </Content>
                {/* <Footer style={{ textAlign: "center" }}>
                    Copyright designed by Muhammad Ejaz
                </Footer> */}
            </Layout>
        </Layout>
    );
}
