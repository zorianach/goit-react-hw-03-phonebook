import styled from 'styled-components'

const FormFilter = styled.form`
display: flex;
// flex-direction: column;
flex-direction: column;
gap: 8px;
justify-content: start;
margin-left: 20px;
`;
const LabelFilter = styled.label`
color: black
display: block;
`;
const InputFilter = styled.input`
width: 200px;
  background: transparent;
  border: 1px solid black;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 30px;`;

export {FormFilter, LabelFilter, InputFilter}