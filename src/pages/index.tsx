import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.colors.textoPrimary};
  //color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <Title>Setup - Next - styledComponent - typescript</Title>;
}
