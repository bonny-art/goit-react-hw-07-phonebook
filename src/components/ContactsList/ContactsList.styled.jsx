import styled from '@emotion/styled';

export const ContactsListContainer = styled.ul`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.spacing(1.5)};

  padding-top: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(10)};
  padding-right: ${props => props.theme.spacing(30)};
  padding-left: ${props => props.theme.spacing(30)};

  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.spacing(0.5)};
`;

export const Message = styled.p`
  margin-left: auto;
  margin-right: auto;

  color: ${props => props.theme.colors.accent2};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;
