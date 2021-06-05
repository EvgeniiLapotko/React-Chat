import React from "react";
import { Button, Block } from "../../components";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

function RegisterForm(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        dirty,
        isValid,
    } = props;

    const succes = false;
    return (
        <Block className="block__wrapper">
            <div className="auth__top">
                <h1 className="auth__title">Регистрация</h1>
                <p className="auth__subtitle">Пожалуйста зарегистрируйтесь</p>
            </div>
            {!succes ? (
                <Form
                    name="nest-messages"
                    className="register-form"
                    onSubmit={handleSubmit}
                >
                    <Form.Item>
                        <Input
                            placeholder="Ваше Имя"
                            size="large"
                            prefix={<UserOutlined />}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            name="name"
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={
                            !touched.email
                                ? ""
                                : errors.email
                                ? "errors"
                                : "success"
                        }
                        help={!touched.email && errors.email}
                        hasFeedback
                    >
                        <Input
                            id="email"
                            placeholder="Email"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            name="Email"
                            type="email"
                            className={
                                errors.email && touched.email
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Пароль" size="large" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Повторите Пароль" size="large" />
                    </Form.Item>

                    <Form.Item>
                        {dirty && !isValid && <span>Warning</span>}
                        <Button
                            onClick={handleSubmit}
                            type="primary"
                            htmlType="submit"
                            size="large"
                        >
                            Зарегестрироваться
                        </Button>
                    </Form.Item>
                </Form>
            ) : (
                <div className="register-check">
                    <ExclamationCircleOutlined className="icons__reg" />
                    <h2>Ожидается подтверждение аккаунта</h2>
                    <p>Пожалуйста подтвердите свой аккаунт</p>
                    <Button type="primary" htmlType="submit" size="large">
                        Подтвердить
                    </Button>
                </div>
            )}

            <Link to="/login" className="link__reg">
                Уже есть аккаунт
            </Link>
        </Block>
    );
}

export default RegisterForm;
