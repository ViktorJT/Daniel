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
          featuredMedia {
            __typename
            ... on Media {
              media {
                id
                url
                height
                width
              }
            }
            ... on VimeoLink {
              id
              url
            }
          }
          projectMedia {
            __typename
            ... on Media {
              media {
                id
                url
                height
                width
              }
            }
            ... on VimeoLink {
              id
              url
            }
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

  const featured = homes[0].projects.map(
    ({ title, slug, featuredMedia }: any, i: number) => {
      if (featuredMedia.__typename === "VimeoLink") {
        const unpacked = {
          title,
          slug,
          ...featuredMedia,
        };

        homes[0].projects[i].featuredMedia = unpacked;
        return unpacked;
      } else if (featuredMedia.__typename === "Media") {
        const unpacked = {
          title,
          slug,
          __typename: featuredMedia.__typename,
          ...featuredMedia.media,
        };

        homes[0].projects[i].featuredMedia = unpacked;
        return unpacked;
      }
    }
  );

  return { home: homes[0], featured, contacts };
}
