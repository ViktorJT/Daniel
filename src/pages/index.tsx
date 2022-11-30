import type { NextPage } from "next";

import styled from "styled-components";
import { Suspense } from "react";

import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Box, Flex } from "@react-three/flex";

import { HtmlProject, ThreeProject } from "../components/Project/";
import { HtmlHero, ThreeHero } from "../components/Hero/";
import Effects from "../components/Effects/";

import { getHome } from "../queries/getHome";

import useWindowSize from "../helpers/useWindowSize";
import cleanProject from "../helpers/cleanProject";

const StyledPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  counter-reset: 'project';
  
  gap: var(--spacer);
`;

const Three = ({ theme, heading, projects, featured }: any) => {
  const { viewport } = useThree();

  const margin = viewport.width / 20; // 5vw

  return (
    <Flex
      dir="column"
      position={[-viewport.width / 2, viewport.height / 2, 0]}
      size={[viewport.width, viewport.height, 0]}
    >
      <ThreeHero viewport={viewport} heading={heading} featured={featured} />
      <Box paddingLeft={margin} paddingRight={margin}>
        {projects.map(({ id, ...project }: any) => {
          return (
            <ThreeProject key={`t-${id}`} theme={theme} viewport={viewport} {...project} />
          );
        })}
      </Box>
    </Flex>
  );
};

const Html = ({ heading, projects, featured }: any) => {
  return (
    <StyledPage>
      <HtmlHero heading={heading} featured={featured} />
      {projects.map(({ id, ...project }: any) => (
        <HtmlProject
          key={`h-${id}`}
          {...project}
        />
      ))}
    </StyledPage>
  );
};

const Home: NextPage<any> = ({ theme, heading, height, featured, projects }) => {
  const { width } = useWindowSize();

  const isDesktop = width > 1100;

  return isDesktop
    ? (
      <Canvas
        linear={true}
        style={{
          position: "absolute",
          top: 0,
          touchAction: "none",
          overflow: "hidden",
        }}
      >
        <Preload all />
        <ScrollControls
          pages={height} // Each page takes 100% of the height of the canvas
          distance={1}
          damping={5}
        >
          <Suspense fallback={null}>
            <Scroll>
              <Three
                theme={theme}
                heading={heading}
                projects={projects}
                featured={featured}
              />
              <Effects />
            </Scroll>
          </Suspense>
        </ScrollControls>
      </Canvas>
    )
    : <Html heading={heading} projects={projects} featured={featured} />;
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

  const height = featured.reduce((sum: number, project: any) => {
    const factor = project.isLandscape ? 0.5 : 1;
    return sum + factor;
  }, 1.2); // 1 = Hero, .2 = Footer

  return {
    props: {
      contacts: contacts,
      heading: home.heading,
      projects: data,
      featured,
      height,
    },
  };
}

export default Home;
