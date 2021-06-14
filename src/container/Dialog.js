import React, { useState, useEffect } from "react";
import { DialogsBlock as BaseDialogs } from "../components";
import { actionsDialogs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Dialog({ items, userId }) {
    const [inputValue, setInputValue] = useState("");
    const [filtred, setFiltred] = useState(Array.from(items));
    const dispatch = useDispatch();
    const dialogs = useSelector((state) => state.dialogs);

    useEffect(() => {
        if (!dialogs.items.length) {
            dispatch(actionsDialogs.fetchDialogs());
        } else {
            setFiltred(dialogs.items);
        }
    }, [dialogs.items, dispatch]);

    const onChangeInput = (value) => {
        setFiltred(
            dialogs.items.filter(
                (dialog) =>
                    dialog.user.fullname
                        .toLowerCase()
                        .indexOf(value.toLowerCase()) >= 0
            )
        );
        setInputValue(value);
    };

    const dispatchSelectDialog = (id) => {
        dispatch(actionsDialogs.getCurrentDialog(id));
    };

    return (
        <BaseDialogs
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
            userId={userId}
            onSelectDialog={dispatchSelectDialog}
        />
    );
}

export default Dialog;
