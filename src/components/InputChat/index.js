import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./InputChat.scss";
import {
    SmileOutlined,
    CameraOutlined,
    AudioOutlined,
    SendOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import classNames from "classnames";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const InputChat = () => {
    const [value, setValue] = useState("");
    const [toogleSmile, setToogleSmile] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);

    const toogleClassSmile = () => {
        setToogleSmile(!toogleSmile);
    };
    const addEmoji = (e) => {
        let emoji = e.native;
        setValue((prev) => {
            return prev + emoji;
        });
    };

    const handleInputFile = (e) => {
        const selectedObjectFile = [];
        for (let key of e.target.files) {
            selectedObjectFile.push(key);
        }
        setSelectedFile(selectedObjectFile);
    };
    useEffect(() => {
        console.log(selectedFile);
    }, [selectedFile]);
    return (
        <div className="chat__input">
            <div className="chat__input-smile">
                <div
                    className={classNames("chat__input-smilePicker", {
                        active: toogleSmile,
                    })}
                >
                    <Picker
                        set="apple"
                        className="pickerSmile"
                        onSelect={(e) => addEmoji(e)}
                    />
                </div>
                <SmileOutlined onClick={toogleClassSmile} />
            </div>
            <Input
                onChange={(e) => setValue(e.target.value)}
                placeholder="Введите сообщение..."
                size="large"
                className="chat__input-input"
                value={value}
            />
            <div className="chat__input-action">
                <label htmlFor="file">
                    <CameraOutlined />
                </label>
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="chat__input-fileload"
                    onChange={(e) => handleInputFile(e)}
                    multiple
                />
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
