import styled from 'styled-components';

export const DropdownStyles = styled.div`
  .dropdown-option {
    height: 60px;
    padding: 0px 5px;
    outline: 0;
    color: #1F2D27;
    font-size: 18px;
    border: none;
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 0.55;
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
      width: 16px;
      height: 16px;
      background: #F6F9FC;
      border-top: 1px solid rgba(89, 107, 100, 0.16);
      border-left: 1px solid rgba(89, 107, 100, 0.16);

      top: -8px;
      left: -8px;
      border-radius: 4px 0 0 0;

      transform: rotate(45deg);
    }
  }

  .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    background: #F6F9FC;
    border-radius: 10px;
    
  }

  .dropdown-section {
    position: absolute;
  }

  
`;

export const Container = styled.div`

background: ${props => props.theme.colors.primary};
//box-shadow: 3px 3px #EFEFEF, 1em 0 0.4em olive;
box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 30px;
//border-bottom: 1px solid #EFEFEF;

height: 5rem;
width: 100%;

display: flex;
align-items: center;

`;

export const Logo = styled.div`
padding-right: 50px;
padding-left: 50px;

`;

export const MenuDrop = styled.nav`

 > ul {
    //background: #393C43;
    list-style-type: none;
    display: flex;
  
    position: relative;
    align-items: center;
    justify-content: left;
   
    gap: 10px;
    
  }

`

export const Perfil = styled.div`
 margin-left: auto;
 display: flex;
 align-items: center;
 padding-right: 50px;


 >div{
  padding: 0.25rem 0 0.25rem 1rem;

    >h1{
    display: flex;
    font-size:1rem;
    font-weight: bold;
      >p{
      color: blue;
      font-size: 0.75rem;
      padding-left: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    }
    >span{
    font-size:1rem;
    font-weight:lighter;
    }
 }

>img{
  //background-color: red;
  height:60px;
  width: 60px;
}

`