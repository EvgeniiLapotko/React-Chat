import React from "react";
import { Button, Block } from "../../components";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <Block className="block__wrapper">
            <div className="auth__top">
                <h1 className="auth__title">Войдите в аккаунт</h1>
                <p className="auth__subtitle">
                    Пожалуйста войдите в свой аккаунт
                </p>
            </div>
            <Form name="basic" initialValues={{ remember: true }}>
                <Form.Item
                    className="label__auth"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input size="large" placeholder="Логин" />
                </Form.Item>

                <Form.Item
                    className="label__auth"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password size="large" placeholder="Пароль" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">
                        Войти в аккаунт
                    </Button>
                </Form.Item>

                <Link to="/register" className="link__reg">
                    Зарегестрироваться
                </Link>
            </Form>
        </Block>
    );
}

export default LoginForm;
