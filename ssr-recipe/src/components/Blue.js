import React from "react";
import styled from "styled-components";

const BlueBox = styled.div`
  background: blue;
  font-size: 1.5rem;
  color: white;
  width: 128px;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blue = () => {
  return <BlueBox>Blue</BlueBox>;
};

export default Blue;
