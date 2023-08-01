import styled from 'styled-components';

export const Todo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 650px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 5px;
  margin-top: 5px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px; 
    margin: 5px;
    border: none;
    cursor: pointer;
  }

  > input[type="text"] {
    flex: 1;
    height: 30px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px;
  }
  > p{
    min-width: 490px;
  }
  
`;
