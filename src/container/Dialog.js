import React, { useState } from "react";
import { DialogsBlock as BaseDialogs } from "../components";

function Dialog({ items, userId }) {
    const [inputValue, setInputValue] = useState("");
    const [filtred, setFiltred] = useState(Array.from(items));

    const onChangeInput = (value) => {
        setFiltred(
            items.filter(
                (dialog) =>
                    dialog.user.fullname
                        .toLowerCase()
                        .indexOf(value.toLowerCase()) >= 0
            )
        );
        setInputValue(value);
    };
    return (
        <BaseDialogs
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
            userId={userId}
        />
    );
}

export default Dialog;
