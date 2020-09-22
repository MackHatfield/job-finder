import { useGraphQL } from 'graphql-react';
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
      {data.jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </Layout>
  ) : (
    <h1>oops</h1>
  );
}
