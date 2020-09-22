import styled from "styled-components";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Home() {
  const router = useRouter();

  return (
    <Layout currentPage='home'>
      <PageContainer>
        <ContentContainer>
          <PageTitle>Job Finder</PageTitle>
          <Caption>Find Awesome Jobs Today!</Caption>
          <Button onClick={() => router.push("/jobs")}>CHECK IT OUT</Button>
        </ContentContainer>
      </PageContainer>
    </Layout>
  );
}

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  align-items: center;
  margin: 0 auto;
`;
const ContentContainer = styled.div`
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-weight: 600;
  font-size: 4.5em;
  letter-spacing: 0.25em;
  text-decoration: underline #1cd860;
`;

const Caption = styled.h3`
  font-size: 1.75em;
`;

const Button = styled.button`
  background-color: #3db6f2;
  border: 2px solid #3db6f2;
  color: white;
  border-radius: 3px;
  padding: 10px 40px 10px 40px;
`;
