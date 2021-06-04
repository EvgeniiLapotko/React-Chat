import React from "react";
import { Button, Block } from "../../../components";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import {ExclamationCircleOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';


function RegisterForm() {

    const succes = false;
    return (
        <Block className="block__wrapper">
            <div className="auth__top">
                <h1 className="auth__title">Регистрация</h1>
                <p className="auth__subtitle">Пожалуйста зарегистрируйтесь</p>
            </div>
            {!succes ? 
            <Form name="nest-messages" className="register-form">
            <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
                <Input placeholder="Ваше Имя" size="large" prefix={<UserOutlined />}/>
            </Form.Item>
            <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                <Input placeholder="Email" size="large"/>
            </Form.Item>
            <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                <Input placeholder="Пароль" size="large"/>
            </Form.Item>
            <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                <Input placeholder="Повторите Пароль" size="large"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                    Зарегестрироваться
                </Button>
            </Form.Item>
        </Form> :
        <div className="register-check">
            <ExclamationCircleOutlined className='icons__reg' />
            <h2>Ожидается подтверждение аккаунта</h2>
            <p>Пожалуйста подтвердите свой аккаунт</p>
            <Button type="primary" htmlType="submit" size="large">
                    Подтвердить
                </Button>
            
        </div>    
        }
            
            <Link to="/login" className="link__reg">
                Уже есть аккаунт
            </Link>
        </Block>
    );
}

export default RegisterForm;
