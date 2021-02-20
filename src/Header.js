import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>

      <img
        className="header__logo"
        src="https://logodix.com/logo/15275.png"
        alt="tinder logo"
      />
      <IconButton>
        <QuestionAnswerIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
