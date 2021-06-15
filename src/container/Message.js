import React, { useEffect, useRef } from "react";
import { MessageBlock as BaseMessage } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { actionsMessage } from "../redux/actions";

function Message({ items }) {
    const messageRef = useRef(null);
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message);
    const currentDialog = useSelector(({ dialogs }) => dialogs.currentDialog);

    useEffect(() => {
        dispatch(actionsMessage.fetchMessage(currentDialog));
    }, [currentDialog, dispatch]);

    useEffect(() => {
        messageRef.current.scrollTo(0, 5555);
    }, [message.items]);
    return (
        <>
            <BaseMessage items={message.items} blockRef={messageRef} />
        </>
    );
}

export default Message;
