import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import "./Message.scss";

const Message = (props) => {
    return (
       <h1>Messages</h1>
    );
};

Message.propTypes = {
    className: PropTypes.string,
};

export default Message;
