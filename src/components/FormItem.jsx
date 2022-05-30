import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../store/actionCreators/commentActions";
import { hideModal } from "../store/actionCreators/checkActions";
import MyButton from "./UI/my-button/MyButton";
import MyInput from "./UI/my-input/MyInput";
import MyTextArea from "./UI/text-area/MyTextArea";

const FormItem = ({bookId}) => {

  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [isWarning, setIsWarning] = useState(false)

  function createComment(event) {
    event.preventDefault()

    if (title === '' && text === '') {
      setIsWarning(true)
      return
    } 
  
    const comment = {
      commentId: new Date(),
      bookId,
      title,
      text
    }

    dispatch(addComment(comment))
    dispatch(hideModal(false))
    setIsWarning(false)
    setTitle('')
    setText('')
  }

  return (
    <form >
      <span>Title:</span>
      <MyInput value={title} onChange={(e) => setTitle(e.target.value)}   />
      <span>Comment:</span>
      <MyTextArea value={text} rows={5} onChange={(e) => setText(e.target.value)}/>
      <MyButton onClick={createComment} children={'ADD COMMENT'} />
      {
        isWarning
        ? <span className="warning_label">Fill in all the fields*</span>
        : null
      }
      
    </form>
  )
}

export default FormItem