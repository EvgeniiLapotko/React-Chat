import React from "react";
import Message from "../Messages";

import { Empty } from "antd";

import "./MessageBlock.scss";

function MessageBlock({ items }) {
    return (
        <div className="chat__window">
            {!items.length ? (
                <div className="chat__window-empty">
                    <div>
                        <Empty description="Сообщений нет" />
                    </div>
                </div>
            ) : (
                <div>
                    {items.map((item, index) => (
                        <Message {...item} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MessageBlock;
