import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BsCheck, BsCheckAll } from "react-icons/bs";

const IconReaded = ({ isMe, isReading, dialogs__icon }) => {
    return (
        <>
            {isMe &&
                (isReading ? (
                    <BsCheckAll
                        className={classNames("icon__read icon__read--check", {
                            dialogs__icon: dialogs__icon,
                        })}
                    />
                ) : (
                    <BsCheck
                        className={classNames("icon__read", {
                            dialogs__icon: dialogs__icon,
                        })}
                    />
                ))}
        </>
    );
};

IconReaded.propTypes = {
    className: PropTypes.string,
};

export default IconReaded;
