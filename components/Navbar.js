import styled from 'styled-components';
import Link from 'next/link';

const Navbar = ({ currentPage }) => {
  return (
    <Container>
      <AppTitle>Job Finder</AppTitle>
      <LinkContainer>
        <Link href='/'><LinkText selected={currentPage === 'home'}>Home</LinkText></Link>
        <Link href='/jobs'><LinkText selected={currentPage === 'jobs'}>Job Search</LinkText></Link>
      </LinkContainer>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  background-color: #e8e8e8;
  border-bottom: 2px solid #d6d4d4;
`;

const AppTitle = styled.h2`
  display: inline;
  text-decoration: underline #1cd860;
`;

const LinkContainer = styled.span`
  margin-left: 20px;
`;

const LinkText = styled.a`
  margin-right: 10px;
  color: ${props => props.selected ? '#1cd860' : 'black'};
`;

export default Navbar;
