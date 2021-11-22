import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.primaryLight};
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index:100;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;