import React from "react";
import orderBy from "lodash/orderBy";
import DialogsItem from "../Dialogs";
import PropTypes from "prop-types";
import "./DialogsBlock.scss";

const DialogsBlock = ({ items, userId }) => {
    return (
        <div className="dialogs">
            {orderBy(items, ["created_data"], ["desc"]).map((item, index) => {
                return (
                    <DialogsItem
                        message={item}
                        user={item.user}
                        key={item._id}
                        isMe={item.user._id === userId}
                    />
                );
            })}
        </div>
    );
};

DialogsBlock.propTypes = {
    className: PropTypes.string,
};

export default DialogsBlock;
