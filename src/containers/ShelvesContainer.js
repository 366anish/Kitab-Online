import React from "react";
import Shelf from "../components/Shelf";
import styled from "styled-components";

const ShelvesUL = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function ShelvesContainer() {
  return (
    <>
      <h2>Shelves....</h2>
      <ShelvesUL>
        <Shelf />
        <Shelf />
        <Shelf />
        <Shelf />
        <Shelf />
        <Shelf />
      </ShelvesUL>
    </>
  );
}
