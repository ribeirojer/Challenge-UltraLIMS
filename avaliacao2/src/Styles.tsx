import styled from "styled-components";

export const Wrapper = styled.main`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin: 1rem 0;
    color: #16213e;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;
  }
  main form {
    display: flex;
    justify-content: center;
    width: 60vw;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    margin-right: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: #16213e;
    font-family: "Poppins";
    font-size: 1.2rem;
    border: 3px solid #01aef0;
  }
  input:focus,
  input:focus-visible {
    border: 3px solid #16213e;
  }
  button {
    text-align: center;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;
    color: #ffffff;
    background-color: #01aef0;
    transition: 0.3s;
    cursor: pointer;
  }
  button:hover {
    background-color: #055d80;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  .error {
    width: 60vw;
    position: absolute;
    top: 234px;
    color: #f00;
  }
  .save {
    display: flex;
    justify-content: flex-end;
    width: 60vw;
    margin-top: 2rem;
  }
`;