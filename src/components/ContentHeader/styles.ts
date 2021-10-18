import styled from 'styled-components';

interface IColors{
  lineColor: string;
}

export const Container = styled.div`
  
`;

export const TitleContainer = styled.div<IColors>`
display: flex;
align-items: center;
gap: 0.5rem;

> h1 {
    color: ${props => props.theme.colors.textoPrimary};
    font-size: 2.1rem;

    &::after {
            content: '';
            display: block;
            border-bottom: 0.3rem solid ${props => props.lineColor};
        }
}
> h3{
    color: ${props => props.theme.colors.textoPrimary};
    font-size: 2.1rem;
    font-weight: normal;
}

>div{
  background:${props => props.theme.colors.textoPrimary};
  width: 0.8rem;
  height: 0.2rem;
}
`