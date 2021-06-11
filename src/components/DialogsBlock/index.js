import React from "react";
import orderBy from "lodash/orderBy";
import DialogsItem from "../Dialogs";
import PropTypes from "prop-types";
import "./DialogsBlock.scss";
import { Input, Empty } from "antd";

const DialogsBlock = ({ items, userId, onSearch, inputValue }) => {
    return (
        <div className="dialogs">
            <div className="dialogs-search">
                <Input.Search
                    placeholder="Поиск среди диалогов"
                    onChange={(e) => onSearch(e.target.value)}
                    value={inputValue}
                />
            </div>
            {!items.length ? (
                <Empty description="Никого не найдено" />
            ) : (
                orderBy(items, ["created_data"], ["desc"]).map(
                    (item, index) => {
                        return (
                            <DialogsItem
                                message={item}
                                user={item.user}
                                key={item._id}
                                isMe={item.user._id === userId}
                            />
                        );
                    }
                )
            )}
        </div>
    );
};

DialogsBlock.propTypes = {
    className: PropTypes.string,
};

export default DialogsBlock;
