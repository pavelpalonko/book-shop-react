import React from "react";
import git from "../svg/gitHub.svg"

const Footer = () => {

  return (
    <div className="footer">
      <a href="https://github.com/pavelpalonko/book-shop-react" target='_blank' rel="noreferrer">
        <div>GitHub</div>
        <img src={git} alt="Git Hub" />
      </a>
    </div>
  )
}

export default Footer