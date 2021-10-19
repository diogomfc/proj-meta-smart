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

  > p{
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
