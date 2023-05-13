import { gql, GraphQLClient } from "graphql-request";

const getProjectNav = (currentProjectId: string, allProjects: any) => {
  const currentIndex = allProjects.findIndex(
    ({ id }: any) => id === currentProjectId
  );

  const isFirstProject = currentIndex === 0;
  const isLastProject = currentIndex === allProjects.length - 1;

  const previousProject = isFirstProject
    ? allProjects[allProjects.length - 1]
    : allProjects[currentIndex - 1];

  const nextProject = isLastProject
    ? allProjects[0]
    : allProjects[currentIndex + 1];

  return { previousProject, nextProject };
};

export async function getProject(slug: string) {
  const query = gql`
    query getProject($slug: String!) {
      project(where: { slug: $slug }) {
        id
        title
        slug
        client
        director
        agency
        production
        dop
        stillsPhotographer
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
          ... on VimeoLink {
            id
            url
            large
          }
        }
      }
      contacts {
        id
        type
        label
        value
      }
      homes {
        projects(first: 100) {
          id
          title
          client
          slug
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

  const { project, contacts, homes }: any = await client.request(query, {
    slug,
  });

  const allProjects = homes[0].projects;
  const currentProjectId = project.id;

  const { previousProject, nextProject } = getProjectNav(
    currentProjectId,
    allProjects
  );

  if (project.featuredMedia.__typename === "Media") {
    project.featuredMedia = { ...project.featuredMedia.media, __typename: project.featuredMedia.__typename };
  }

  project.projectMedia.forEach((media: any, i: number) => {
    if (media.media) {
      project.projectMedia[i] = { ...media.media, large: media.large, __typename: media.__typename };
    }
  });

  return { ...project, contacts, previousProject, nextProject };
}
