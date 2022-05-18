import React from "react";
import { useDispatch } from "react-redux";
import { deletComment } from "../../../store/actionCreators/commentActions";
import classes from "./Comment.module.css"

const Comment = ({comment, comments}) => {

  const dispatch = useDispatch()

  function clearComment(id) {
    const clearedListComments = comments.filter((comm) => comm.id !== id)
    dispatch(deletComment(clearedListComments))
  }

  return (
    <div className={classes.commentWrapper}>
      <div className={classes.commentTitle}>{comment.title}</div>
      <div>{comment.text}</div>
      <button onClick={() => clearComment(comment.id)}>xxx</button>
    </div>
  )
}

export default Comment