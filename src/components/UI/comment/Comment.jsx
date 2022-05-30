import React from "react";
import { useDispatch } from "react-redux";
import { deletComment } from "../../../store/actionCreators/commentActions";
import classes from "./Comment.module.css"

const Comment = ({comment, comments}) => {

  const dispatch = useDispatch()

  function clearComment(id) {
    const clearedListComments = comments.filter((comm) => comm.commentId !== id)
    dispatch(deletComment(clearedListComments))
  }

  return (
    <div className={classes.commentWrapper}>
      <div className={classes.commentTitle}>{comment.title}</div>
      <div className={classes.commentText}>{comment.text}</div>
      <button className={classes.deletBtn} onClick={() => clearComment(comment.commentId)}>✖</button>
    </div>
  )
}

export default Comment