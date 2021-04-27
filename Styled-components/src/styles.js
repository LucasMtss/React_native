import styled from 'styled-components';

export const Title = styled.h1`
  color: red;
  font-size: ${props => `${props.fontSize}px`};
  text-decoration: underline;
  span{
    font-size: 12px;
  };
`;

export const TitleSmall = styled(Title)`
  color: blue;
`;