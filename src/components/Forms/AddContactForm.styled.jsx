import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top:20px;
  margin-left: 20px;
`;

const Label = styled.label`
color: black;
margin-bottom: 10px;
`;

const Input = styled.input`
  width: 350px;
  margin-bottom: 15px;
  background: transparent;
  border: 1px solid black;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 30px;
  &:focus {
    // border: 1px solid blue;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 15px 5px;
  
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 4px;
  &:hover {
    background: rgb(88, 142, 240);
    // border: #ffffff;
    color: #ffffff;
    font-weight: 500;
  }
`;

export {Form, Label, Input, Button}


//   font-size: ${(p) => p.theme.fontSize};
//   color: ${(p) => p.theme.colors.grey};
//   text-shadow: ${(p) => p.theme.boxShadow.textShadow};
//   border: 1px solid rgba(0, 0, 0, 0.3);
//   outline: none;
//   box-shadow:${(p) => p.theme.boxShadow.textShadow};
//   &:focus {
//     box-shadow:${(p) => p.theme.boxShadow.boxShadow};