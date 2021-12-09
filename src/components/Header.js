import React from "react";
import "./Header.css";

const Header = (props) => {
  const { title, explanation, date } = props;
  return (
    <div className="image-header">
      <div className="mainTitle">
        <h1>{title.title}</h1>
      </div>
      <div className="description">
        <p>{explanation.explanation};</p>
      </div>

      <div className="date">{date.date}</div>
    </div>
  );
};

export default Header;
