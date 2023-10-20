import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  width: 100%;
  background-color: ${props => props.$bg};
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  width: 400px;
  height: 200px;
  box-shadow: 0px 4px 10px 4px gray;
  margin: 50px auto;
  overflow: hidden;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 50px auto;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;
`;
