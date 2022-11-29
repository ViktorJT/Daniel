import { gql, GraphQLClient } from "graphql-request";

export async function getHome() {
  const query = gql`
    query getHome {
      homes {
        heading
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
      contacts {
        id
        type
        label
        value
      }
    }
  `;

  const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API!, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`,
    },
  });

  const { homes, contacts } = await client.request(query);

  return { home: homes[0], contacts };
}
