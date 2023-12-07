import styled from 'styled-components';

const ContactListStyle = styled.ul`
    padding: 0px;
    margin-left: 20px;
    margin: 0px;
    width: 422px;
    list-style-type: disc;
`
const ContactItem = styled.li`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    width: 400px;
    padding: 0;
    align-items: center;
    
`;

const Line = styled.p`
margin: 0px;
line-height: 2;
margin-left: 40px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1px 6px;
  
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

export {ContactListStyle, ContactItem, Line, DeleteButton};