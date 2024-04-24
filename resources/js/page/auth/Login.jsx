import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { authUser } from "../../store/slices/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); // State to manage loading state

    const onFinish = (values) => {
        setLoading(true); // Set loading state to true when form is submitted
        dispatch(authUser(values))
            .then(() => {
                console.log("Success:", values);
            })
            .catch((error) => {
                console.log("Failed:", error);
            })
            .finally(() => {
                setLoading(false); // Set loading state to false after dispatch
            });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
