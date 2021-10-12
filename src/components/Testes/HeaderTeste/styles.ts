import styled from "styled-components";

export const Container = styled.div`
background: ${props => props.theme.colors.primary};
box-shadow: 3px 3px #EFEFEF, -1em 0 0.4em olive;
border-bottom: 1px solid #EFEFEF;

height: 10.5rem;
width: 100%;

display: flex;
align-items: center;
z-index: 1000;
position: fixed;

padding: 2rem 4rem;

  
  >p{
      margin-left: 2rem;
      padding: 0.25rem 0 0.25rem 2rem;
      border-left: 1px solid #EFEFEF;
  }

  >span{
      margin-left: auto;
      text-transform: capitalize;
    }

  >img{
    margin-right: 6rem;
  }

`
export const Perfil = styled.div`
 margin-left: auto;
 display: flex;
 align-items: center;



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

export const ContainerHeader = styled.div`
  //height: 20rem;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 3px 3px #EFEFEF, -1em 0 0.4em olive;
  border-bottom: 1px solid #EFEFEF;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
`
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  padding-top: 10px;
`;