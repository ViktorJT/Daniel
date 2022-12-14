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
      contacts {
        id
        type
        label
        value
      }
      homes {
        projects {
          id
          title
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

  const { project, contacts, homes } = await client.request(query, {
    slug,
  });

  const allProjects = homes[0].projects;
  const currentProjectId = project.id;

  const { previousProject, nextProject } = getProjectNav(
    currentProjectId,
    allProjects
  );

  if (project.featuredMedia.__typename === "Media") {
    project.featuredMedia = {...project.featuredMedia.media, __typename: project.featuredMedia.__typename};
  }

  project.projectMedia.forEach((media: any, i: number) => {
    if (media.media) {
      project.projectMedia[i] = {...media.media, __typename: media.__typename};
    }
  });

  return { ...project, contacts, previousProject, nextProject };
}
