import styled from "styled-components";

export const StyledWeatherContainer = styled.div`
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`;

export const StyledWeatherError = styled.p`
  color: red;
  text-align: center;
  margin-top: 50px;
  font-size: 24px;
  font-weight: 600;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  input {
    padding: 10px;
    font-size: 18px;
    margin-right: 10px;
    border-radius: 6px;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 6px;
  }
`;
