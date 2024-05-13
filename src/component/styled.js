import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 18rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
display: inline-flex;

  
`;

export const CardTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CardSubtitle = styled.h6`
  font-size: 1rem;
  color: #6c757d; 
`;

export const CardText = styled.p`
  font-size: 1rem;
`;

export const CardLink = styled.a`
  display: block;
  margin-top: 5px;
  font-size: 1rem;
  text-decoration: none;
  color: #007bff; 
`;