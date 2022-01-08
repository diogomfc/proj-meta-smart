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
    //left: 13rem;

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
    //left: 15rem;
    position: absolute;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    background: #F6F9FC;
    border-radius: 1rem;
  }

  .dropdown-section {
    position: absolute;
  }
`;

export const Container = styled.div`
background: ${props => props.theme.colors.primary};
box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 30px;

height: 7.5rem;
width: 100%;

display: flex;
align-items: center;
justify-content: center;

`;

export const Logo = styled.div`
padding-right: 5rem;
padding-left: 5rem;

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

export const Perfil = styled.div`
 margin-left: auto;
 display: flex;
 align-items: center;
 padding-right: 5rem;
 gap: 1rem;

  >div{
    >h1{
      display: flex;
      font-size:1.6rem;
      font-weight: bold;
      color: ${props => props.theme.colors.textoPrimary};

      >p{
      color: ${props => props.theme.colors.bluePrimary};
      font-size: 1rem;
      padding-left: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    }
    >span{
    font-size:1.6rem;
    font-weight:lighter;
    color: ${props => props.theme.colors.textoPrimary};
    }
  }

  >img{
    height:6rem;
    width: 6rem;
  }

  .Notification{
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${props => props.theme.colors.secondary};
    height: 4.4rem;
    width: 4.4rem;
    border-radius: 0.6rem;

    cursor: pointer;

    >img{
     display: flex;
     position: relative;
     left: 0.8rem;
    }

    >div{
     display: flex;
     position: relative;
     right: 0.4rem;
     bottom: 0.8rem;
     align-items: center;
     justify-content: center;

     background:#fff;
     box-shadow: 0 0 1em #44D600;
     height:1.5rem;
     width:1.5rem;
     border-radius: 50%;
     line-height: 0;
     >span{
       color:#44D600;
     }
    }

  }

  
  .btmSair{
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${props => props.theme.colors.secondary};
    height: 4.4rem;
    width: 4.4rem;
    border-radius: 0.6rem;

    cursor: pointer;
    >h1{
      color: ${props => props.theme.colors.textoSecondary};
      font-weight: normal;
    }
  }



`