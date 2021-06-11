import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Status.scss";

const Status = ({ online }) => {
    return (
        <div
            className={classNames("status", {
                "status--online": online,
            })}
        >
            {online ? "Online" : "Offline"}
        </div>
    );
};

Status.propTypes = {
    className: PropTypes.string,
};

export default Status;
