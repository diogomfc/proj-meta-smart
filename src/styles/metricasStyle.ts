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
// HD = Header - Cabeçalho
// FP = Filtro e Pesquisa
// CT = Conteúdo Centro

  display: grid;
  margin: 0 auto;
  height:100vh;
  //width: 1024px;

  grid-template-columns: 1fr;
  grid-template-rows: 7rem 10.0rem 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;

    grid-template-areas:
    "HD"
    "FP"
    "CT"
    ;
`;

export const Header = styled.div`
  grid-area: HD; 
  display: flex;
  align-items: center;
  text-align: center;

  animation: ${animate} .5s;
`
export const FiltroPesquisa = styled.div`
  grid-area: FP;
  display: flex;
  align-items: center;
  text-align: center;

  animation: ${animate} .5s;

  form{
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 0.5rem;
  
    .formFiltro{
      height: 5rem;
      width: 28.8rem;
      background: #EDF0EF;
      border-radius: 1.6rem;
      padding: 1rem;

      
    }
    
    .formPesquisa{
      height: 5rem;
      width: 75rem;
      background: #EDF0EF;
      border-radius: 1.6rem;
      padding: 1rem;
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
  grid-area: CT;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-bottom: 9rem;

  animation: ${animate} .5s;

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

  > #p1 {
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
