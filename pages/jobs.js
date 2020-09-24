import { useGraphQL } from 'graphql-react';
import styled from 'styled-components';
import JobCard from '../components/JobCard';
import Layout from '../components/Layout';
import Search from '../components/Search';
import _ from 'lodash';

import { useState } from 'react';

const filterJobs = (jobArr, filters) => {
  const { roleFilter } = filters;
  return jobArr.filter(job => job.title.toLowerCase().includes(roleFilter.toLowerCase()));
}

export default function Jobs() {
  const [searchFilters, setSearchFilters] = useState({});

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
      <Search searchFilters={searchFilters} setSearchFilters={setSearchFilters} />

      <Container>
        {
          _.isEmpty(searchFilters) ? data.jobs.map((job, index) => (
          <JobCard key={index} job={job} />
          )) : filterJobs(data.jobs, searchFilters).map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        }
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