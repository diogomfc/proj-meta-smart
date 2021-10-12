import styled from "styled-components";

type Icolor={
  color: string
}

export const Container = styled.div<Icolor>`
background-color: ${props => props.color};

display: flex;
align-items: center;
justify-content: center;
text-align: center;

height: 500px;
width: 100%;

`
