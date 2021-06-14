import React, { useEffect } from "react";
import { MessageBlock as BaseMessage } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { actionsMessage } from "../redux/actions";

function Message({ items }) {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message);
    const currentDialog = useSelector(({ dialogs }) => dialogs.currentDialog);

    useEffect(() => {
        dispatch(actionsMessage.fetchMessage(currentDialog));
    }, [currentDialog]);
    return (
        <>
            <BaseMessage items={message.items} />
        </>
    );
}

export default Message;
