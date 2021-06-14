import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { format, parseISO } from "date-fns";

import isToday from "date-fns/isToday";
import "./Dialogs.scss";
import { IconReaded } from "../index";

const getMessageTime = (date) => {
    if (isToday(date)) {
        return format(date, "HH:mm");
    } else {
        return format(date, "dd.MM.yyyy");
    }
};

const Dialogs = ({ user, message, isMe, onSelect }) => {
    const getAvatar = (avatar, name) => {
        if (avatar) {
            return <img src={avatar} alt="avatar" />;
        } else {
            return (
                <div className="dialogs__item-anon">
                    <span>{name[0]}</span>
                </div>
            );
        }
    };

    return (
        <div
            className={classNames("dialogs__item", {
                "dialogs__item-online": user.isOnline,
            })}
            onClick={(e) => onSelect(message._id)}
        >
            <div className="dialogs__item-avatar">
                {getAvatar(user.avatar, user.fullname)}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <div className="dialogs__item-info-name">
                        {user.fullname}
                    </div>
                    <div className="dialogs__item-info-data">
                        {getMessageTime(
                            parseISO(message.created_at, {
                                additionalDigits: 1,
                            })
                        )}
                    </div>
                </div>
                <div className="dialogs__item-info-bottom">
                    <div className="dialogs__item-info-text">
                        {message.text}
                    </div>
                    {isMe ? (
                        <IconReaded
                            isMe={isMe}
                            isReading={message.isReaded}
                            dialogs__icon={true}
                        />
                    ) : (
                        <div
                            className={classNames({
                                "dialogs__item-info-num": message.unReaded,
                            })}
                        >
                            {message.unReaded ? (
                                <span>{message.unReaded}</span>
                            ) : (
                                ""
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    className: PropTypes.string,
};

export default Dialogs;
