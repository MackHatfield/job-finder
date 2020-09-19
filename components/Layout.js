import styled from 'styled-components';

const Layout = (props) => {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default Layout;
