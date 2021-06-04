import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import ru from "date-fns/locale/ru";
import "./Message.scss";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Message = ({ avatar, name, text, date, isMe }) => {
    return (
        <div className={classNames("message", { message__isMe: isMe })}>
            <div className="message__avatar">
                <img src={avatar} alt="avatar" />
            </div>
            {/* <div className="message__username">{name}</div> */}
            <div className="message__block-text">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
                <div className="message__date">
                    {formatDistanceToNow(date, {
                        addSuffix: true,
                        locale: ru,
                    })}
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    name: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.object,
};

export default Message;
