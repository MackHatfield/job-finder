import { useGraphQL } from 'graphql-react';
import styled from 'styled-components';
import JobCard from '../components/JobCard';
import Layout from '../components/Layout';
import Search from '../components/Search';

export default function Jobs() {
  const { loading, cacheValue: { data } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = "https://api.graphql.jobs";
    },
    operation: {
      query: `
      {
        jobs {
          title
          description
          cities {
            name
          }
          company {
            name
          }
          applyUrl
        }
      }
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return data ? (
    <Layout currentPage='jobs'>
      <Container>
        {data.jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </Container>
    </Layout>
  ) : (
    <h1>oops</h1>
  );
}

const Container = styled.div`
  justify-content: space-evenly;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  max-width: 80%;
`;