import LoginForm from "../components/LoginForm";
import { withFormik } from "formik";

export default withFormik({
    mapPropsToValues: () => ({ login: "", password: "" }),
    // Custom sync validation
    validate: (values) => {
        const errors = {};

        if (!values.login) {
            errors.login = "Обязательно поле";
        }

        if (!values.password) {
            errors.password = "Обязательно поле";
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: "LofinForm",
})(LoginForm);
