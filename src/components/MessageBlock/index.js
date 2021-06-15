import React from "react";
import Message from "../Messages";

import { Empty, Spin } from "antd";
import { useSelector } from "react-redux";

import "./MessageBlock.scss";

function MessageBlock({ items, blockRef }) {
    const isLoaded = useSelector(({ message }) => message.isLoaded);
    return (
        <div className="chat__window" ref={blockRef}>
            {isLoaded ? (
                <div className="chat__window-empty">
                    <Spin size="large" tip="Загрузка сообщений..." />
                </div>
            ) : !items.length ? (
                <div className="chat__window-empty">
                    <div>
                        <Empty description="Сообщений нет" />
                    </div>
                </div>
            ) : (
                <div className="chat__message-wrapper">
                    {items.map((item, index) => (
                        <Message {...item} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MessageBlock;
