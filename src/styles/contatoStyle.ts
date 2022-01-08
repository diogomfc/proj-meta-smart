import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;
export const Container = styled.div`
// HEADER-TITLE = Header - Cabeçalho
// CONTEUDO = Conteúdo Centro

  display: grid;
  margin: 0 auto;
  height:100vh;
  //width: 1024px;

  grid-template-columns: 1fr;
  grid-template-rows: 7rem 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;

    grid-template-areas:
    "HEADER-TITLE"
    "CONTEUDO"
    ;
`;
export const Header = styled.div`
  grid-area: HEADER-TITLE; 
  display: flex;
  align-items: center;
  text-align: center;
  width: 125rem;
  padding-bottom:1rem;

  animation: ${animate} .5s;
`
export const Main = styled.div`
  grid-area: CONTEUDO;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-bottom: 9rem;

  animation: ${animate} .5s;
  
  .actions .check{
    text-decoration: none;
  }
`
export const ModalWrapper = styled.div`
  
  .modal-wrapper.active{
   visibility: visible;
   opacity:1;
  }
  
  .modal-wrapper{
    position: fixed;
    width:100vw;
    height:100vh;
    top: 0;
    left: 0;

    display:flex;
  
    background: rgba(5,2,6, .8);

    visibility: hidden;
    opacity:0;
  }

  .content-modal{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 49rem;

    //background: #000;
  }

  .content-modal .form-modal{
    //display: grid;
    //width: 49rem;
  
  }

  .content-modal .form-modal div:nth-child(1){
    padding-bottom: 1.9rem;
    input{
      font-size: 1.6rem;
      background: ${props => props.theme.colors.gray};
      height: 6.4rem;
      width: 49rem;
      color: ${props => props.theme.colors.textoSecondary};
      border-radius: 1.6rem;
      padding: 2rem;
      outline: none;
    }
  }
  .content-modal .form-modal div:nth-child(2){
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-content: stretch;
    justify-content: space-evenly;
  
    gap: 1.9rem;
   
    input{
      font-size: 1.6rem;
      background: ${props => props.theme.colors.gray};
      height: 6.4rem;
      width: 23rem;
      color: ${props => props.theme.colors.textoSecondary};
      border-radius: 1.6rem;
      outline: none;
      padding: 2rem;
    }
  }

  .content-modal .form-modal .btn-group{
    display: flex;
    gap: .5rem;
    padding-top: 1.5rem;
   
    .btn-primary{
      color:#737380;
      height:5rem;
      width:13rem;
      border-radius: .8rem;
      background:#DBDCDD;
    }

    .btn-secondary{
      color:${props => props.theme.colors.textoPrimary};
      height:5rem;
      width:13rem;
      border-radius: .8rem;
      background:${props => props.theme.colors.cardBordaPositivo};
    }

  }

`