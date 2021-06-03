import React from "react";
import { Button, Block } from "../../../components";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";

function RegisterForm() {
    return (
        <Block className="block__wrapper">
            <div className="auth__top">
                <h1 className="auth__title">Регистрация</h1>
                <p className="auth__subtitle">Пожалуйста зарегистрируйтесь</p>
            </div>
            <Form name="nest-messages" className="register-form">
                <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
                    <Input placeholder="Ваше Имя" />
                </Form.Item>
                <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                    <Input placeholder="Пароль" />
                </Form.Item>
                <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                    <Input placeholder="Повторите Пароль" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">
                        Зарегестрироваться
                    </Button>
                </Form.Item>
            </Form>
            <Link to="/" className="link__reg">
                Уже есть аккаунт
            </Link>
        </Block>
    );
}

export default RegisterForm;
