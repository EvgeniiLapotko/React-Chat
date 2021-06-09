import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

import "./Message.scss";
import {IconReaded, Time} from '../index'



const Message = ({
    avatar,
    name,
    text,
    date,
    isMe,
    isReading,
    attachment,
    isTyping,
}) => {
    return (
        <div
            className={classNames("message", {
                message__isMe: isMe,
                message__isTyping: isTyping,
                message__image: attachment && attachment.length === 1,
            })}
        >
                <IconReaded isMe={isMe} isReading={isReading} />
            <div className="message__avatar">
                <img src={avatar} alt="avatar" />
            </div>
            {/* <div className="message__username">{name}</div> */}

            <div className="message__block-text">
                {(text || isTyping) && (
                    <div className="wrapper__bubble">
                        {text && (
                            <div className="message__bubble">
                                <p className="message__text">{text}</p>
                            </div>
                        )}
                        {isTyping && (
                            <div className="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                    </div>
                )}
                <div className="message__attachment">
                    {attachment &&
                        attachment.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="message__attachment-img"
                                >
                                    <img src={item.img} alt={name} />
                                </div>
                            );
                        })}
                </div>

                {date && (
                    <div className="message__date">
                        <Time date={date} />
                        
                    </div>
                )}
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
    isTyping: PropTypes.bool,
};

export default Message;
