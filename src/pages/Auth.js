import React from "react";
import { LoginForm, RegisterForm } from "../modules/LoginForm";
import { Route } from "react-router-dom";

function Auth() {
    return (
        <div className="auth">
            <Route exact path='/login'>
                <LoginForm />
            </Route>
            <Route path="/login/register">
                <RegisterForm />
            </Route>
        </div>
    );
}

export default Auth;
