import type { NextPage } from "next";

import styled from "styled-components";

import Project from "../components/Project/";
import Hero from "../components/Hero/";

import { getHome } from "../queries/getHome";

const StyledPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  counter-reset: 'project';
  
  gap: var(--spacer);
`;

const Home: NextPage<any> = (
  { heading, featuredMedias, projects },
) => {
  return (
    <StyledPage>
      <Hero heading={heading} featuredMedias={featuredMedias} />
      {projects.map(({ id, ...project }: any, i: number) => (
        <Project
          key={`h-${i}-${id}`}
          {...project}
        />
      ))}
    </StyledPage>
  );
};

export async function getStaticProps() {
  const { home, featuredMedias, contacts } = await getHome();

  if (!home) return { notFound: true }

  return {
    props: { ...home, contacts, featuredMedias },
  };
}

export default Home;
