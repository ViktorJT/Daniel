import { gql, GraphQLClient } from "graphql-request";

export async function getContacts() {
  const query = gql`
    query getContacts {
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

  const data = await client.request(query);

  return data;
}
