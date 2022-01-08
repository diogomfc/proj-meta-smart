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
// FILTRO = Filtro e Pesquisa
// CONTEUDO = Conteúdo Centro

  display: grid;
  margin: 0 auto;
  height:100vh;
  

  grid-template-columns: 1fr;
  grid-template-rows: 7rem 8.0rem 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;

    grid-template-areas:
    "HEADER-TITLE"
    "FILTRO"
    "CONTEUDO"
    ;
`;

export const HeaderBase = styled.div`
  grid-area: HEADER-TITLE; 
  display: flex;
  align-items: center;
  text-align: center;
  width: 125rem;
  padding-bottom:1rem;

  animation: ${animate} .5s;
`
export const FiltroPesquisa = styled.div`
  grid-area: FILTRO;
  display: flex;
  flex-direction: row;
  flex-wrap:nowrap;
  align-items: center;
  text-align: center;
  justify-content:space-around;

  animation: ${animate} .5s;

  .form-pesquisa{
    width: 125rem;
    display: flex;
    justify-content:space-between;
    align-items:center;
    gap: 0.5rem;
  
   .input-filtro{
      height: 5rem;
      width: 20.8rem;
      background: ${props => props.theme.colors.gray};
      color: ${props => props.theme.colors.textoSecondary};
      border-radius: 1.6rem;
      padding: 1rem;

      outline: none;
    }
    
    .input-pesquisa{
      height: 5rem;
      width: 88rem;
      background: #EDF0EF;
      border-radius: 1.6rem;
      padding: 1rem;

      outline: none;
    }

    .btn-adicionar.disabled{
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.6rem;
      height: 5rem;
      width: 11rem;
      font-size:1.6rem;
      font-weight:lighter;
      background: ${props => props.theme.colors.gray};

      cursor: pointer;
    }

    .btn-adicionar{
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.6rem;
      height: 5rem;
      width: 11rem;
      font-size:1.6rem;
      font-weight:lighter;
      background: ${props => props.theme.colors.cardBordaPositivo};

      cursor: pointer;
    }


    .btnPesquisa{
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.6rem;
      height: 5rem;
      width: 5rem;
      font-weight:lighter;
      color: ${props => props.theme.colors.bluePrimary};
      background: #D8DDFA;

      cursor: pointer;
    }

  }

`
export const Main = styled.div`
  grid-area: CONTEUDO;

  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  text-align: center;

  padding-bottom: 9rem;

  animation: ${animate} .5s;


 .main-content-noresult.active{
   visibility: visible;
   opacity:1;
  }

 .main-content-result.active{
   visibility: visible;
   opacity:1;
 }
`
export const ContentListagemNoresult = styled.div`
    
    position: relative;
    bottom: 100px;
   
    visibility: hidden;
    opacity:0;

 > div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;

    padding: 1.5rem;

    h1 {
      color: #1f2d27;
      font-weight: bold;
      font-size: 2.2rem;
    }
  }

  > p {
    color: #1f2d27;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 1.5rem;
  }

  > span {
    color: #1f2d27;
    font-size: 1.6rem;
  }

`

//**?BoxListagemClientes
export const ContentListagemLinks = styled.div`

visibility: hidden;
opacity:0;

// CT = CATEGORIA 
// RV = REVISAO
// DT = DATA 
// RP = REVISAOPOR 
// TT = TITULO 
// AC =  ACOES
// LR = LISTRESULTADO

  display: grid;
  margin: 10px auto;
  //height:200px;
  width: 125rem;

  animation: ${animate} .5s;
  
  grid-template-columns: 14rem 8.8rem 8.8rem 18rem 5fr 8.5rem ;
  grid-template-rows: 40px 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;

  grid-template-areas:
    "CT RV DT RP TT AC"
    "LR LR LR LR LR LR";
    
    background: ${props => props.theme.colors.secondary};
  
    .TitleCategoria { 
        grid-area: CT;
  
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: .5rem;

        >h2{
          color: ${props => props.theme.colors.cardSubTextoMeta};
          font-size: 1.4rem;
          font-weight:normal;
          }
      }
      
    .TitleRevisao { 
        grid-area: RV;
      
        
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: .5rem;

        >h2{
          color: ${props => props.theme.colors.cardSubTextoMeta};
          font-size: 1.4rem;
          font-weight:normal; 
          }
      }

    .TitleData { 
      grid-area: DT;
      
      display:flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: .5rem;

      >h2{
        color: ${props => props.theme.colors.cardSubTextoMeta};
        font-size: 1.4rem;
        font-weight:normal; 
        }
      
      }

    .TitleRevisadoPor { 
      grid-area: RP; 
      
      display:flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: .5rem;

      >h2{
        color: ${props => props.theme.colors.cardSubTextoMeta};
        font-size: 1.4rem;
        font-weight:normal; 
        }

      }

    .TitleTitle { 
        grid-area: TT; 
       
        display:flex;
        //justify-content: center;
        align-items: center;
        text-align: center;
        padding: .5rem;
        padding-left: 1rem;

        >h2{
          color: ${props => props.theme.colors.cardSubTextoMeta};
          font-size: 1.4rem;
          font-weight:normal; 
        }
      }

    .TitleAcoes { 
        grid-area: AC; 

        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: .5rem;
        padding-right: 4rem;

        >h2{
          color: ${props => props.theme.colors.cardSubTextoMeta};
          font-size: 1.4rem;
          font-weight:normal; 
        }
      }

    .AreaListagemCadastro { 
        grid-area: LR; 
       // background: blue;
        //display:flex;
        text-align: center;
        padding: 5px;
        a {
          text-decoration-color: ${props => props.theme.colors.blueSecondary};
         }
      }


`

//**?MODAL */
export const ModalWrapper = styled.div`
 /// modal cadastro
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
      height: 3.4rem;
      width: 49rem;
      color: ${props => props.theme.colors.textoSecondary};
      border-radius: 1.6rem;
      padding: 2rem;
      outline: none;
    }

    input::placeholder {
      color: ${props => props.theme.colors.blueTertiary};
     }
  }
  .content-modal .form-modal div:nth-child(2){
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
  .content-modal .form-modal div:nth-child(3){
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
    select{
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

  .btn-group{
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


/// modal mensagem confirmado
  .modal-msg-confirma.active{
   visibility: visible;
   opacity:1;
  }

 .modal-msg-confirma{
    visibility: hidden;
    opacity:0;

    position: fixed;
    width:100vw;
    height:100vh;
    top: 0;
    left: 0;

    display:flex;
  
    background: rgba(5,2,6, .8);

    visibility: hidden;
    opacity:0;
   
    .modal-content-msg-confirma{
      
      padding-top: 1.8rem;

      >h2{
        font-size: 1.4rem;
        }
    }
 }

 
/// modal mensagem atualizado 
 .modal-msg-confirma-atualizado.active{
   visibility: visible;
   opacity:1;
  }

 .modal-msg-confirma-atualizado{
    visibility: hidden;
    opacity:0;

    position: fixed;
    width:100vw;
    height:100vh;
    top: 0;
    left: 0;

    display:flex;
  
    background: rgba(5,2,6, .8);

    visibility: hidden;
    opacity:0;
   
    .modal-content-msg-confirma-atualizado{
      
      padding-top: 1.8rem;

      >h2{
        font-size: 1.4rem;
        }
    }
 }


 ///modal commits
 .modal-commits.active{
   visibility: visible;
   opacity:1;
  }

 .modal-commits {
    visibility: hidden;
    opacity:0;

    position: fixed;
    width:100vw;
    height:100vh;
    top: 0;
    left: 0;

    display:flex;
    flex-direction: column;
    justify-content:center;
  
    background: rgba(5,2,6, .8);

    .listagem-commits{
      flex: 1;
      margin-top: 10px;
      padding: 0px 0px;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      
      overflow-y: scroll;
      cursor: pointer;

      border-radius: 0.8rem;


      &.active-scrollbar{
        height: calc(80vh - 30rem); 
      }
      
     
      ::-webkit-scrollbar {
        width: 5px;
       
      }

     ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.textoSecondary};
        border-radius: 20rem;
        
      }

      ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.primary};
        
      }

      .listagem-content-commits{
        //background:red;
        //padding-top: 0.5rem;
        padding-bottom: 1rem;
      }
    }
   
    
 }

 /// modal testes
 .modal-testes.active{
   visibility: visible;
   opacity:1;
  }

 .modal-testes{
    visibility: hidden;
    opacity:0;

    position: fixed;
    width:100vw;
    height:100vh;
    top: 0;
    left: 0;

    display:flex;
  
    background: rgba(5,2,6, .8);

    visibility: hidden;
    opacity:0;
   
    .modal-testes-confirma{
      
      padding-top: 1.8rem;

      >h2{
        font-size: 1.4rem;
        }
    }
 }

 /// modal testes mensagem atualizado 
 .modal-testes-confirma.active{
   visibility: visible;
   opacity:1;
  }

 .modal-testes-confirma{
    visibility: hidden;
    opacity:0;

    position: fixed;
    width:100vw;
    height:100vh;
    top: 0;
    left: 0;

    display:flex;
  
    background: rgba(5,2,6, .8);

    visibility: hidden;
    opacity:0;
   
    .modal-testes-confirma-1{
      
      padding-top: 1.8rem;

      >h2{
        font-size: 1.4rem;
        }
    }
 }



`