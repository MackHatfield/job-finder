import "../styles/globals.css";
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';

function MyApp({ Component, pageProps, graphql }) {
  return (
    <GraphQLProvider graphql={graphql}>
      <Component {...pageProps} />
    </GraphQLProvider>
  );
}

export default withGraphQLApp(MyApp);
