import styled from 'styled-components';

export const DropdownStyles = styled.div`

    .dropdown-option {
      height: 6rem;
      padding: 0rem 0.5rem;
      outline: 0;
      color: ${props => props.theme.colors.textoPrimary};
      font-size: 1.8rem;
      border: none;
      cursor: pointer;
      opacity: 0.8;

      transition: opacity 0.2s;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }

    .dropdown-root {
      z-index: 1000;
      position: relative;
    
    }

    .dropdown-arrow {
      position: relative;
    
      //^
      &::before {
        content: '';
        position: absolute;
        width: 1.6rem;
        height: 1.6rem;
        background: #F6F9FC;
        border-top: 0.1rem solid rgba(89, 107, 100, 0.16);
        border-left: 0.1rem solid rgba(89, 107, 100, 0.16);

        top: -0.8rem;
        left: -0.8rem;
        border-radius: 0.4rem 0 0 0;

        transform: rotate(45deg);
      }
    }

    .dropdown-container {
      position: absolute;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      background: #F6F9FC;
      border-radius: 1rem;
    }

    .dropdown-section {
      position: absolute;
    }

@media (max-width: 2880px){
    .dropdown-arrow {
      right: 71rem;
    }
    .dropdown-container {
      right: 71rem;
    }
  } 
@media (max-width: 2560px){
    .dropdown-arrow {
      right: 71rem;
    }
    .dropdown-container {
      right: 71rem;
    }
  }
@media (max-width: 1920px){
    .dropdown-arrow {
      right: 53rem;
    }
    .dropdown-container {
      right: 53rem;
    }
  }
@media (max-width: 1680px){
    .dropdown-arrow {
      right: 40rem;
    }
    .dropdown-container {
      right: 40rem;
    }
  }
@media (max-width: 1600px){
    .dropdown-arrow {
      right: 35rem;
    }
    .dropdown-container {
      right: 35rem;
    }
  }
@media (max-width: 1440px){
    .dropdown-arrow {
      right: 28rem;
    }
    .dropdown-container {
      right: 28rem;
    }
  }
@media (max-width: 1366px){
    .dropdown-arrow {
      right:25rem;
    }
    .dropdown-container {
      right: 25rem;
    }
  }
@media (max-width: 1280px){
    .dropdown-arrow {
      right: 20rem;
    }
    .dropdown-container {
      right: 20rem;
    }
  }
@media (max-width: 1024px){
    .dropdown-arrow {
      right: 0rem;
    }
    .dropdown-container {
      right: 0rem;
    }
  }
`;

export const Container = styled.div`
width: 100%;

display: flex;
align-items: center;
justify-content: center;
//margin-left: 0;

`;


export const MenuDrop = styled.nav`

position: relative;


 > ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    //justify-content: left;
    gap: 1rem;
  }

`
