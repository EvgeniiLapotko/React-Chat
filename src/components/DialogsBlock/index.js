import React from "react";
import orderBy from "lodash/orderBy";
import DialogsItem from "../Dialogs";
import PropTypes from "prop-types";
import "./DialogsBlock.scss";
import { Input, Empty, Spin } from "antd";
import { useSelector } from "react-redux";

const DialogsBlock = ({
    items,
    userId,
    onSearch,
    inputValue,
    onSelectDialog,
}) => {
    const isLoaded = useSelector(({ dialogs }) => dialogs.isLoaded);
    const currentDialog = useSelector(({ dialogs }) => dialogs.currentDialog);
    return (
        <div className="dialogs">
            <div className="dialogs-search">
                <Input.Search
                    placeholder="Поиск среди диалогов"
                    onChange={(e) => onSearch(e.target.value)}
                    value={inputValue}
                />
            </div>
            {isLoaded ? (
                <div className="chat__window-empty">
                    <Spin size="large" tip="Загрузка диалогов..." />
                </div>
            ) : !items.length ? (
                <Empty description="Никого не найдено" />
            ) : (
                orderBy(items, ["created_at"], ["desc"]).map((item, index) => {
                    return (
                        <DialogsItem
                            message={item}
                            user={item.user}
                            key={item._id}
                            isMe={item.user._id === userId}
                            onSelect={onSelectDialog}
                            currentDialog={currentDialog}
                        />
                    );
                })
            )}
        </div>
    );
};

DialogsBlock.propTypes = {
    className: PropTypes.string,
};

export default DialogsBlock;
