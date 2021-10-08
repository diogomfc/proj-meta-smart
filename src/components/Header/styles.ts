import styled from "styled-components";

export const Container = styled.div`
background: ${props => props.theme.colors.primary};
box-shadow: 3px 3px #EFEFEF, -1em 0 0.4em olive;
border-bottom: 1px solid #EFEFEF;

height: 6.5rem;

display: flex;
align-items: center;

padding: 2rem 4rem;

  p{
      margin-left: 2rem;
      padding: 0.25rem 0 0.25rem 2rem;
      border-left: 1px solid #EFEFEF;
  }

  span{
      margin-left: auto;
      text-transform: capitalize;
    }

`