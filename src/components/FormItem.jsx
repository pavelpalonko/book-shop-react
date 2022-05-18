import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../store/actionCreators/commentActions";
import { hideModal } from "../store/actionCreators/modalActions";
import MyButton from "./UI/my-button/MyButton";
import MyInput from "./UI/my-input/MyInput";
import MyTextArea from "./UI/text-area/MyTextArea";
const FormItem = () => {

  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  function createComment(event) {

    event.preventDefault()

    const comment = {
      id: new Date(),
      title,
      text
    }
    dispatch(addComment(comment))
    dispatch(hideModal(false))
    setTitle('')
    setText('')
  }

  return (
    <form >
      <MyInput value={title} onChange={(e) => setTitle(e.target.value)}   />
      <MyTextArea  value={text} rows={5} onChange={(e) => setText(e.target.value)}/>
      <MyButton onClick={createComment} children={'ADD COMMENT'} />
    </form>
  )
}

export default FormItem