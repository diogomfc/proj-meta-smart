import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-bottom: 9rem;

  height: 100vw;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

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
`;
