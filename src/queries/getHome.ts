import { gql, GraphQLClient } from "graphql-request";

export async function getHome() {
  const query = gql`
    query getHome {
      homes {
        heading
        projects(first: 100) {
          id

          title
          slug

          client
          director
          production
          photographer
          post
          editor

          video
          thumbnail {
            id
            url
            height
            width
          }

          projectMedia {
            __typename
          }
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

  const { homes }: any = await client.request(query);

  return { home: homes[0] };
}
