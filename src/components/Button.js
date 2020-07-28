import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 1.4 rem;
  background: transparent;
  border: 0.1rem solid var(--mainBlue);
  border-color: ${props =>
         props.cart ? "var(--mainYellow)" : "var(--mainGrey)"};
  color: ${prop =>
         (prop.cart ? "var(--mainBlue)" : "var(--mainBlue)")};
  background-color: ${props => props.cart ? "var(--mainClear)" : "var(--mainWhite)"};
   
  padding:0.6rem 0.6rem;
  border-radius: 0.36rem;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.3s ease-in-out;
  &:hover {
    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--mainGrey)"};
    color: var(--mainBlue);
  }
  &:hover {
    border-color: ${props =>
          props.cart ? "var(--mainDark)" : "var(--mainBlue)"};
  }
  &:focus{
      outline:none;
  }
  `;

  export const Button = styled.button`
  background: ${props => props.primary ? "var(--mainPink)" : "var(--mainClear)"};
  color: ${props => props.primary ? "var(--mainClear)" : "var(--mainPink)"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25rem 1rem;
  border: 2px solid var(--mainPink);
  &:focus{
    outline: none;
    border-color: var(--mainBrown);
  }
  border-radius: 3px;
`;
