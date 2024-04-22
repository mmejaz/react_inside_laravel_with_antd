import React from "react";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Avatar, Popover, List } from "antd";

export default function UserProfile() {
    const content = (
        <List>
            <List.Item>
                <UserOutlined /> My Account
            </List.Item>
            <List.Item>
                <KeyOutlined /> Update Password
            </List.Item>
        </List>
    );
    return (
        <div style={{ display: "flex" }}>
            <div></div>
            <div>
                <Popover placement="bottomRight" title="" content={content} trigger="click">
                    <Avatar
                        size={32}
                        icon={<UserOutlined></UserOutlined>}
                    ></Avatar>
                </Popover>
            </div>
        </div>
    );
}
