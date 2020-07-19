import React from "react";
import styled from "styled-components";

const RedBox = styled.div`
  background: red;
  font-size: 1.5rem;
  color: white;
  width: 128px;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Red = () => {
  return <RedBox>Red</RedBox>;
};

export default Red;
