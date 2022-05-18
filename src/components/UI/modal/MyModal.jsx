import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MyModal.module.css"
import { hideModal } from "../../../store/actionCreators/modalActions";

const MyModal = ({children}) => {

  const dispatch = useDispatch()
  const isModal = useSelector(({modalR}) => modalR.isModal)

  const rootClasses = [classes.myModal]

  if (isModal) {
    rootClasses.push(classes.myModalActive)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={()=>dispatch(hideModal(false))} >
      <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal