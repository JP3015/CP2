import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const RodapeSection = styled.b`
  font-size: 10px;
  line-height: 17px;
  color: "#000";
  @media (max-width: 700px) {
    font-size: 7px;
    line-height: 13px;
  }
`;
