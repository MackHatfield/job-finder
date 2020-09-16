import { useGraphQL } from "graphql-react";
import JobCard from "../components/JobCard";

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
    <div>
      {data.jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  ) : (
    <h1>oops</h1>
  );
}
