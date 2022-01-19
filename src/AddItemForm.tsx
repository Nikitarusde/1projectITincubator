import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

import {BootstrapButton} from "./UI/Button";
import {TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === "Enter") {
            addItem();
        }
    }

    return <div>
        <TextField  id="outlined-basic" label="What do you want" variant="outlined"
            value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
        />
        <BootstrapButton variant="contained"  onClick={addItem}>add</BootstrapButton>

        {error && <div className="error-message">{error}</div>}
    </div>
}
