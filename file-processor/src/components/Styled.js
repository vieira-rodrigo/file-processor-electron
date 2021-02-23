import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  margin: 1%;
  max-height: 450px;
  overflow-y: auto;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FileInput = styled.input`
  margin: 2%;
`;

export const Button = styled.button`
  padding: 1%;
  background: #cc4125;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.1;
    cursor: default;
  }
`;

export const PillDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #cc4125;
  font-size: 1rem;
  border-radius: 2em;
  margin: 0.5em;
`;

export const Word = styled.span`
  color: #fff;
  font-weight: bold;
  margin-left: 0.5em;
`;

export const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #cc4125;
  margin: 0.5em;
  height: 4em;
  width: 4em;
  border-radius: 2em;
  font-size: 0.8rem;
`;
