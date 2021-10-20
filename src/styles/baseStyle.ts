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

export const Header = styled.div`
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

  form{
    width: 125rem;
    display: flex;
    justify-content:space-between;
    align-items:center;
    gap: 0.5rem;
  
   .input-filtro{
      height: 5rem;
      width: 20.8rem;
      background: #EDF0EF;
      border-radius: 1.6rem;
      padding: 1rem;

      outline: none;
    }
    
    .input-pesquisa{
      height: 5rem;
      width: 78rem;
      background: #EDF0EF;
      border-radius: 1.6rem;
      padding: 1rem;

      outline: none;
    }

    .btnAdcionar{
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.6rem;
      height: 5rem;
      width: 11rem;
      font-weight:lighter;
      color: ${props => props.theme.colors.textoPrimary};
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
  justify-content: center;
  text-align: center;

  padding-bottom: 9rem;

  animation: ${animate} .5s;

 .main-content{
  visibility: hidden;
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

 }

 .main-content-result{
  display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

  h1 {
      color: #1f2d27;
      font-weight: bold;
      font-size: 2.2rem;
    }
 }
`
//**?BoxListagemClientes
export const ContentListagemClientes = styled.div`

// CT = CATEGORIA 
// RV = REVISAO
// DT = DATA 
// RP = REVISAOPOR 
// TT = TITULO 
// AC =  ACOES
// LR = LISTRESULTADO

  display: grid;
  margin: 10px auto;
  height:200px;
  width: 125rem;

  animation: ${animate} .5s;
  
  grid-template-columns: 14rem 8.8rem 8.8rem 14rem 5fr 8.5rem ;
  grid-template-rows: 40px 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;

  grid-template-areas:
    "CT RV DT RP TT AC"
    "LR LR LR LR LR LR";
    
    background: ${props => props.theme.colors.secondary};
    //box-shadow: 0px 0px 5px 0px ${props => props.theme.colors.border};
    //border-radius: 6px;
    //border: thin solid ${props => props.theme.colors.border};

  
      
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
        padding-left: 3rem;

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

        >h2{
          color: ${props => props.theme.colors.cardSubTextoMeta};
          font-size: 1.4rem;
          font-weight:normal; 
        }
      }


    .AreaListagemCliente { 
        grid-area: LR; 
       // background: blue;
        //display:flex;
        text-align: center;
        padding: 5px;
        a {
          text-decoration: none;
         }
      }


`
