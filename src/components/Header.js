import React from "react";
import "./Header.css";
import styled from "styled-components";
import Dates from "./Dates";

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h1 {
    width: 35%;
    font-family: ${(props) => props.theme.mainFont};
    font-size: 1.6rem;
    border: 2px solid ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.secondaryColor};
    margin-left: 20px;
    margin-top: 8px;
    color: ${(props) => props.theme.thirdColor};

    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${(props) => props.theme.transColor};
    }
  }
`;

const StyledDescription = styled.div`
  width: 100%;
  border-bottom: 1px dashed black;

  p {
    font-family: ${(props) => props.theme.mainFont};
    font-size: 1.3rem;
    margin: 20px;
    border: 2px solid ${(props) => props.theme.secondaryColor};

    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.thirdColor};
    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${(props) => props.theme.transColor};
    }
  }
`;

const StyledMainTitle = styled.div`
  border-bottom: 1px dashed black;
`;

const StyledDate = styled.div`
  font-size: 1.3rem;
  width: 15%;
  align-self: flex-end;
  margin: 10px;
  border: 2px solid ${(props) => props.theme.secondaryColor};

  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.thirdColor};
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.transColor};
  }
`;

const Header = (props) => {
  const { title, explanation, date } = props;
  const newDate = Dates[Math.floor(Math.random() * Dates.length)];
  return (
    <StyledHeader>
      <StyledMainTitle>
        <h1>{title.title}</h1>
      </StyledMainTitle>
      <StyledDescription>
        <p>{explanation.explanation};</p>
      </StyledDescription>

      <StyledDate>
        <button onClick={() => Header(date.date)}>Click for NEW DATE:</button>
        {date.date}
      </StyledDate>
    </StyledHeader>
  );
};

export default Header;
