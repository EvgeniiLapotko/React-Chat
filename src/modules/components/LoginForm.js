import React from "react";
import { Button, Block } from "../../components";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

function LoginForm(props) {
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
    return (
        <Block className="block__wrapper">
            <div className="auth__top">
                <h1 className="auth__title">Войдите в аккаунт</h1>
                <p className="auth__subtitle">
                    Пожалуйста войдите в свой аккаунт
                </p>
            </div>
            <Form
                name="loginForm"
                initialValues={{ remember: true }}
                onSubmit={handleSubmit}
            >
                <Form.Item
                    className="label__auth input__wrapper"
                    validateStatus={
                        !touched.login ? "" : errors.login ? "error" : "success"
                    }
                >
                    <Input
                        size="large"
                        placeholder="Логин"
                        id="login"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.login}
                        name="login"
                        className={
                            errors.login && touched.login
                                ? "text-input error"
                                : "text-input"
                        }
                    />
                    {errors.login && touched.login && (
                        <div className="input__suberrors">{errors.login}</div>
                    )}
                </Form.Item>

                <Form.Item
                    className="label__auth input__wrapper"
                    validateStatus={
                        !touched.password
                            ? ""
                            : errors.password
                            ? "errors"
                            : "success"
                    }
                >
                    <Input.Password
                        size="large"
                        placeholder="Пароль"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        name="password"
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
                <div className="warning__message">
                    {dirty && !isValid && <span>Ошибка заполнения формы</span>}
                </div>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        onClick={handleSubmit}
                    >
                        <Link to="/im">Войти в аккаунт</Link>
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
