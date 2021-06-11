import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputChat.scss";
import {
    SmileOutlined,
    CameraOutlined,
    AudioOutlined,
    SendOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

const InputChat = () => {
    const [value, setValue] = useState("");
    return (
        <div className="chat__input">
            <div className="chat__input-smile">
                <SmileOutlined />
            </div>
            <Input
                onChange={(e) => setValue(e.target.value)}
                placeholder="Введите сообщение..."
                size="large"
                className="chat__input-input"
            />
            <div className="chat__input-action">
                <CameraOutlined />
                {value ? (
                    <SendOutlined className="chat__input-icon--send" />
                ) : (
                    <AudioOutlined />
                )}
            </div>
        </div>
    );
};

InputChat.propTypes = {
    className: PropTypes.string,
};

export default InputChat;
