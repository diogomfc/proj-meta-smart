import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.colors.textoPrimary};
  //color: ${({ theme }) => theme.colors.primary};
`;

import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout color="#5856">
        <Title>Home</Title>
      </Layout>
    </>
  );
}
