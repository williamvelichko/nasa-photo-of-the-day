import React from "react";
import "./Images.css";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 100%;

  img {
    width: 60%;
    border-radius: 50%;
    margin-bottom: 100px;
  }
`;

const Images = (props) => {
  const { info } = props;
  return (
    <StyledImage>
      <img src={info.url} />
    </StyledImage>
  );
};

export default Images;
