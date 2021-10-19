import styled from 'styled-components';

export const DropdownStyles = styled.div`
//*
@media (max-width: 2880px){
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
      right: 70rem;

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
      right: 70rem;
      position: absolute;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      background: #F6F9FC;
      border-radius: 1rem;
    }

    .dropdown-section {
      position: absolute;
    }
  }
//*
@media (max-width: 1750px){
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
      right: 42rem;

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
      right: 42rem;
      position: absolute;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      background: #F6F9FC;
      border-radius: 1rem;
    }

    .dropdown-section {
      position: absolute;
    }
}

@media (max-width: 1650px){
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
      right: 24rem;

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
      right: 24rem;
      position: absolute;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      background: #F6F9FC;
      border-radius: 1rem;
    }

    .dropdown-section {
      position: absolute;
    }
}

@media (max-width: 1450px){
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
      right: 24rem;

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
      right: 24rem;
      position: absolute;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      background: #F6F9FC;
      border-radius: 1rem;
    }

    .dropdown-section {
      position: absolute;
    }
}
//*
@media (max-width: 1370px){
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
      right: 24rem;

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
      right: 24rem;
      position: absolute;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      background: #F6F9FC;
      border-radius: 1rem;
    }

    .dropdown-section {
      position: absolute;
    }
}

@media (max-width: 1300px){
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
      right: 24rem;

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
      right: 24rem;
      position: absolute;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      background: #F6F9FC;
      border-radius: 1rem;
    }

    .dropdown-section {
      position: absolute;
    }
}
//*
@media (max-width: 1200px){
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
      right: 17rem;

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
      right: 17rem;
      position: absolute;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      background: #F6F9FC;
      border-radius: 1rem;
    }

    .dropdown-section {
      position: absolute;
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
