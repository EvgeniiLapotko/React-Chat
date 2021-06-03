import React from "react";
import { Button as GreatButton } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = (props) => {
    return (
        <GreatButton
            {...props}
            className={classNames("button", {
                "btn-large": props.size === "large",
            })}
        />
    );
};

Button.propTypes = {
    className: PropTypes.string,
};

export default Button;
