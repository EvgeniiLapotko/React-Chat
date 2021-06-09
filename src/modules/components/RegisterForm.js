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
                    <Form.Item
                        validateStatus={
                            !touched.name
                                ? ""
                                : errors.name
                                ? "errors"
                                : "success"
                        }
                        className="input__wrapper"
                    >
                        <Input
                            id="name"
                            type="text"
                            placeholder="Ваше Имя"
                            size="large"
                            prefix={<UserOutlined />}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            name="name"
                            className={
                                errors.name && touched.name
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                        {errors.name && touched.name && (
                            <div className="input__suberrors">
                                {errors.name}
                            </div>
                        )}
                    </Form.Item>
                    <Form.Item
                        validateStatus={
                            !touched.email
                                ? ""
                                : errors.email
                                ? "errors"
                                : "success"
                        }
                        hasFeedback
                        className="input__wrapper"
                    >
                        <Input
                            id="email"
                            placeholder="Email"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            name="email"
                            type="email"
                            className={
                                errors.email && touched.email
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                        {errors.email && touched.email && (
                            <div className="input__suberrors">
                                {errors.email}
                            </div>
                        )}
                    </Form.Item>
                    <Form.Item
                        validateStatus={
                            !touched.password
                                ? ""
                                : errors.password
                                ? "errors"
                                : "success"
                        }
                        hasFeedback
                        className="input__wrapper"
                    >
                        <Input.Password
                            id="password"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            className={
                                errors.password && touched.password
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                        {errors.password && touched.password && (
                            <div className="input__suberrors">
                                {errors.password}
                            </div>
                        )}
                    </Form.Item>
                    <Form.Item
                        validateStatus={
                            !touched.returnPassword
                                ? ""
                                : errors.returnPassword
                                ? "errors"
                                : "success"
                        }
                        hasFeedback
                        className="input__wrapper"
                    >
                        <Input.Password
                            placeholder="Повторите Пароль"
                            size="large"
                            id="returnPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.returnPassword}
                            name="returnPassword"
                            type="password"
                            className={
                                errors.returnPassword && touched.returnPassword
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                        {errors.returnPassword && touched.returnPassword && (
                            <div className="input__suberrors">
                                {errors.returnPassword}
                            </div>
                        )}
                    </Form.Item>
                    <div className="warning__message">
                        {dirty && !isValid && (
                            <span>Ошибка заполнения формы</span>
                        )}
                    </div>
                    <Form.Item>
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
