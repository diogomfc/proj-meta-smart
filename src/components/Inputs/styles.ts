import styled from 'styled-components'

interface IStyleInput{
  background: string;
  color: string;
  width: number | string;
  height: number | string;
  padding: number | string;
  borderRadius: number | string;
}

export const ContainerInput = styled.div<IStyleInput>`
    background: #000;

 >input{
      background: ${props => props.background};
      height: ${props => props.height};
      width: ${props => props.width};
      color: ${props => props.color};
      border-radius: ${props => props.borderRadius};
      padding: ${props => props.padding};
      outline: none;
 }
`

