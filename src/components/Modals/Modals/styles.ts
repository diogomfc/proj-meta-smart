import styled from 'styled-components';

export const Container = styled.div`
//Header
//Main

display:grid;
//height: 100%;
width: min(60rem, 90%);


margin:auto;
padding: 4rem 5.5rem;
background:${props => props.theme.colors.primary};
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 1rem;

grid-template-rows: 16.8rem 1fr;
grid-template-columns: 1fr;

grid-template-areas:
"MHeader"
"MMain";

.modal-header{ 
  grid-area: MHeader;
  padding-bottom: 1.6rem;
  width: 49rem;

  img{
    padding-bottom: 3rem;
   }

   h1{
    font-weight: normal;
    font-size: 2.8rem;
    padding-bottom: .8rem;
   
   }

   span{
    color: ${props => props.theme.colors.textoSecondary};
    font-size:1.6rem;
   
   }
 }

.modal-main{ 
  grid-area: MMain;
  //background: red;

  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
};

`;
