import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    resize: none;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  body {
    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    background-color: #52add5;
    color: white;

    max-width: 1920px;
    width: 100%;
  }

  div {
    padding: 10px;
  }

  input {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    box-sizing: border-box;
  }
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    align-items: center;
  }
`
export const Button = styled.button`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  text-align: center;
  transition: all 0.3s linear;
  background: navy;
  color: white;

  &:hover {
    background: #1b1b91;
    transform: scale(1.05);
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`

export const Status = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isError'].includes(prop),
})`
  margin:10px;
  background: white;
  border-radius: 5px;
  border: 2px solid ${props => (props.isError ? 'red' : 'green')};
  color: ${props => (props.isError ? 'red' : 'green')};
  padding: 10px;
`