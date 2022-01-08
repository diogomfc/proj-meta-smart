import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding-top: 80px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px); 
  overflow-y: scroll;

  ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.border};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.primary};
    }
`;
