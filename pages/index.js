import styled from "styled-components";

export default function Home() {
  return (
    <PageContainer>
      <ContentContainer>
        <PageTitle>Job Finder</PageTitle>
        <Caption>Find Awesome Jobs Today!</Caption>
        <Button>CHECK IT OUT</Button>
      </ContentContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: pink;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 600px;
`
const ContentContainer = styled.div`
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-weight: 600;
  font-size: 4.5em;
  letter-spacing: .25em;
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
