import React from "react";

const Images = (props) => {
  const { info } = props;
  return (
    <div className="photo">
      <img src={info.url} />
    </div>
  );
};

export default Images;
