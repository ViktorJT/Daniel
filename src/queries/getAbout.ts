import { gql, GraphQLClient } from "graphql-request";

export async function getAbout() {
  const query = gql`
    query getAbout {
      abouts {
        heading
        subHeading
        paragraph
        contacts {
          label
          type
          value
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

  const { abouts }: any = await client.request(query);

  return { about: abouts[0] };
}
