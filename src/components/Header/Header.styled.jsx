import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background: #28519d;
  border-radius: 5px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 576px) {
    justify-content: center;  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: navy;
  text-transform: uppercase;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

export const DataBox = styled.div `
  width: auto;
  height: fit-content;
  color: navy;
  font-weight: bold;

  & div {
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid navy;
  color: navy;
  background: #f8f8f8;
  word-wrap: break-word;
  word-break: break-all;
}
`
