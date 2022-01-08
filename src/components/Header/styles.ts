import styled from 'styled-components';

export const ContainerHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;

background: ${props => props.theme.colors.primary};
box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 30px;

width: 100%;
margin: 0 auto;

position: fixed;
height: 7.5rem;

//background: black;
`

export const Container = styled.div`
// LG = logo
// MN = Menu
// PF = Perfil

display: grid;
margin: 0 auto;
//max-width: 1500px;
z-index: 1000;

grid-template-columns: .5fr 2fr 1fr;
grid-template-rows: 1fr;
gap: 0px 0px;
grid-auto-flow: row;

grid-template-areas:
"LG MN PF"
;
`;

export const Logo = styled.div`
grid-area: LG;

display: flex;
align-items: center;


`

export const Menu = styled.div`
grid-area: MN;
display: flex;

align-items: center;

`

export const Perfil = styled.div`
grid-area: PF;
display: flex;
align-items: center;
justify-content: center;

gap: 1rem;

 >img{
    height:6rem;
    width: 6rem;
    border-radius: 50%;
  }

  >div{
    width:18rem;
    //background: red;
    >h1{
      display: flex;
      font-size:1.6rem;
      font-weight: bold;
      color: ${props => props.theme.colors.textoPrimary};
    }
    >span{
    font-size:1.3rem;
    font-weight:lighter;
    color: ${props => props.theme.colors.textoPrimary};
    }
    >p{
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${props => props.theme.colors.primary};
      font-size: 1rem;
      background: #338AE8;
      width: 6rem;
      border-radius: 0.6rem;
    }
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
      font-size:1.5rem;
    }
  }

`