import React, { useState, useEffect } from "react";
import { Drawer, Button, Input, Space } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { updateThemeColor } from "../store/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
// Theme Settings component

function ThemeSettings() {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("#1677ff"); // Set default color here
    const dispatch = useDispatch();

    const { themeColor } = useSelector((state) => state.userSlice);

    // Function to open the drawer
    const showDrawer = () => {
        setOpen(true);
    };

    // Function to close the drawer
    const onClose = () => {
        setOpen(false);
    };

    // Function to handle color change
    const changeThemeColor = (newColor) => {
        setColor(newColor);
        dispatch(updateThemeColor(newColor));
        localStorage.setItem("primaryColor", newColor); // Store color in local storage
    };

    // Function to load color from local storage on component mount
    useEffect(() => {
        const storedColor = localStorage.getItem("primaryColor");
        if (storedColor) {
            setColor(storedColor);
        }
    }, []);

    return (
        <>
            <SettingOutlined onClick={showDrawer} />
            <Drawer title="Theme Settings" onClose={onClose} open={open}>
                <Space direction="vertical">
                    <Input
                        type="color"
                        value={color}
                        onChange={(e) => changeThemeColor(e.target.value)}
                    />
                </Space>
            </Drawer>
        </>
    );
}

export default ThemeSettings;
