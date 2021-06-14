import React from "react";
import { Status, InputChat } from "../components";
import { Dialog, Message } from "../container";
import {
    TeamOutlined,
    FormOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";

const Home = () => {
    return (
        <div className="home">
            <div className="wrapper__chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined className="chat__sidebar-icon chat__sidebar-icon--users" />
                            <span className="chat__sidebar-text">
                                Список диалогов
                            </span>
                        </div>
                        <FormOutlined className="chat__sidebar-icon chat__sidebar-icon--edit" />
                    </div>

                    <Dialog items={[]} userId={3} />
                </div>

                <div className="chat">
                    <div className="chat__header">
                        <div className="chat__header-title">
                            <div className="chat__header-name">
                                Федор Федорович
                            </div>
                            <div className="chat__header-status">
                                <Status online={true} />
                            </div>
                        </div>
                        <div className="chat__header-dots">
                            <EllipsisOutlined className="chat__header-dots--icon" />
                        </div>
                    </div>
                    <Message items={[]} />
                    <div className="chat__window-input">
                        <InputChat />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
