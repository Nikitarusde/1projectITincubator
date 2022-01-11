import React, {ChangeEvent, useState} from "react";

type EditableSpanType = {
    title: string
    callBack: (title: string) => void,
}

export const EditableSpan = (props: EditableSpanType) => {
    const [title, setTitle] = useState(props.title)

    const [edit, setEdit] = useState(false)
    const onDoubleClickHandler = () => {
        setEdit(true)
    }
    const onBlurHandler = () => {
        setEdit(false)
        props.callBack(title)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <input value={title} onChange={onChangeHandler} autoFocus onBlur={onBlurHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}