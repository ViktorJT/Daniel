import { gql, GraphQLClient } from "graphql-request";

export async function getAllProjects() {
  const query = gql`
      query getProjectBySlug {
        projects {
          id
          title
          slug
          client
          director
          featured {
            url
            id
            height
            width
            mimeType
            videoHeight
            videoWidth
          }
          assets {
            url
            id
            height
            width
            mimeType
            videoHeight
            videoWidth
          }
        }
      }
    `;

  const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API!, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`,
    },
  });

  const data = await client.request(query);

  return data;
}
