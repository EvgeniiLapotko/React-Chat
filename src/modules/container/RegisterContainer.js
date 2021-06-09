import RegisterForm from "../components/RegisterForm";
import { withFormik } from "formik";

export default withFormik({
    mapPropsToValues: () => ({
        name: "",
        email: "",
        password: "",
        returnPassword: "",
    }),
    // Custom sync validation
    validate: (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Обязательно поле";
        }

        if (!values.email) {
            errors.email = "Обязательно поле";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Неверный формат";
        }

        if (!values.password) {
            errors.password = "Обязательно поле";
        }

        if (!values.returnPassword) {
            errors.returnPassword = "Обязательно поле";
        } else if (values.password !== values.returnPassword) {
            errors.returnPassword = "Пароли не совпадают";
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: "RegisterForm",
})(RegisterForm);
