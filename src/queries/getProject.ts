import { gql, GraphQLClient } from "graphql-request";

export async function getProject(slug: string) {
  const query = gql`
    query getProject($slug: String!) {
      project(where: { slug: $slug }) {
        id
        title
        slug

        client
        agency
        director
        production
        photographer
        dop
        post
        editor

        projectMedia(first: 100) {
          __typename
          ... on Media {
            media {
              id
              url
              height
              width
              mimeType
            }
            large
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

  const { project }: any = await client.request(query, {
    slug,
  });

  project.projectMedia.forEach((media: any, i: number) => {
    if (media.media) {
      project.projectMedia[i] = {
        ...media.media,
        large: media.large,
        __typename: media.__typename,
      };
    }
  });

  return { ...project };
}
