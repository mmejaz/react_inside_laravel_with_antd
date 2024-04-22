import {
    HomeFilled,
    AppstoreAddOutlined,
    PayCircleOutlined,
    AreaChartOutlined,
    SettingOutlined,
    BarsOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { Menu } from "antd";
function MenuList() {
    const navigate = useNavigate();
    const pageRedirect = (key) => {
        console.log("page key - ", key);
        navigate(key);
    };
    const items = [
        {
            label: "Home",
            key: "/",
            icon: <HomeFilled />,
        },
        {
            label: "Activity",
            key: "activity",
            icon: <AppstoreAddOutlined />,
            children: [
                {
                    label: "Task1",
                    key: "task1",
                },
                {
                    label: "Task2",
                    key: "task2",
                },

            ],
        },
        {
            label: "Task",
            key: "task",
            icon: <BarsOutlined />,
        },
        {
            label: "Payment",
            key: "payment",
            icon: <PayCircleOutlined />,
        },
        {
            label: "Progress",
            key: "progress",
            icon: <AreaChartOutlined />,
        },
        {
            label: "Settings",
            key: "settings",
            icon: <SettingOutlined />,
        },
        {
            label: "Charts",
            key: "charts",
            icon: <SettingOutlined />,
        },
    ];
    return (
        <Menu
            theme="dark"
            items={items}
            className="menu-bar"
            mode="inline"
            onClick={(e) => pageRedirect(e.key)}
        ></Menu>
    );
}

export default MenuList;
