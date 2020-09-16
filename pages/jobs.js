import { useGraphQL } from 'graphql-react';

export default function Jobs() {
  const { loading, cacheValue: { data } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = 'https://api.graphql.jobs'
    },
    operation: {
      query: `
        {
          cities {
            name
          }
        }
      `
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true
  });

  return data ? (
    <list>
      {
        data.cities.map(city => <li>{city.name}</li>)
      }
    </list>
  ) : <h1>oops</h1>
  
}
