import { gql, GraphQLClient } from "graphql-request";

export async function getProjectBySlug(slug: string) {
  const query = gql`
    query getProjectBySlug($slug: String!) {
      project(where: { slug: $slug }) {
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

  const data = await client.request(query, {
    slug,
  });

  return data;
}
