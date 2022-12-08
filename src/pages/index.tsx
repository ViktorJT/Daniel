import type { NextPage } from "next";

import styled from "styled-components";

import Project from "../components/Project/";
import Hero from "../components/Hero/";
import Footer from "../components/Footer";

import { getHome } from "../queries/getHome";

import cleanProject from "../helpers/cleanProject";

const StyledPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  counter-reset: 'project';
  
  gap: var(--spacer);
`;

const Home: NextPage<any> = (
  { heading, contacts, featured, projects },
) => {
  return (
    <StyledPage>
      <Hero heading={heading} featured={featured} />
      {projects.map(({ id, ...project }: any, i: number) => (
        <Project
          key={`h-${i}-${id}`}
          {...project}
        />
      ))}
      <Footer contacts={contacts} />
    </StyledPage>
  );
};

export async function getStaticProps() {
  const { home, contacts } = await getHome();

  const data = home.projects.map((project: any) => cleanProject(project));

  const featured = data.map(({ title, director, client, featured }: any) => ({
    title,
    director,
    client,
    ...featured,
  }));

  return {
    props: {
      contacts: contacts,
      heading: home.heading,
      projects: data,
      featured,
    },
  };
}

export default Home;
