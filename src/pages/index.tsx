import type { NextPage } from "next";

import styled from "styled-components";
import { Suspense } from "react";
import { useRouter } from "next/router";

import { Loader, Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Box, Flex } from "@react-three/flex";

import { HtmlProject, ThreeProject } from "../components/Project/";
import { HtmlHero, ThreeHero } from "../components/Hero/";
import Effects from "../components/Effects/";
import { HtmlFooter } from "../components/Footer";

import { getHome } from "../queries/getHome";

import useWindowSize from "../helpers/useWindowSize";
import cleanProject from "../helpers/cleanProject";

const StyledPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  counter-reset: 'project';
  
  gap: var(--spacer);
`;

const Three = ({ router, theme, heading, projects, featured }: any) => {
  const { viewport } = useThree();

  const margin = viewport.width / 20; // 5vw

  return (
    <Flex
      dir="column"
      position={[-viewport.width / 2, viewport.height / 2, 0]}
      size={[viewport.width, viewport.height, 0]}
    >
      <ThreeHero
        router={router}
        theme={theme}
        heading={heading}
        featured={featured}
      />
      <Box paddingLeft={margin} paddingRight={margin}>
        {projects.map(({ id, ...project }: any, i: number) => {
          return (
            <ThreeProject
              key={`t-${i}-${id}`}
              router={router}
              index={i + 1}
              theme={theme}
              {...project}
            />
          );
        })}
      </Box>
    </Flex>
  );
};

const Html = ({ contacts, heading, projects, featured }: any) => {
  return (
    <StyledPage>
      <HtmlHero heading={heading} featured={featured} />
      {projects.map(({ id, ...project }: any, i: number) => (
        <HtmlProject
          key={`h-${i}-${id}`}
          {...project}
        />
      ))}
      <HtmlFooter contacts={contacts} />
    </StyledPage>
  );
};

const Home: NextPage<any> = (
  { theme, heading, contacts, height, featured, projects },
) => {
  const { width } = useWindowSize();

  const router = useRouter();

  const isDesktop = width > 1100;

  return isDesktop
    ? (
      <>
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
                  router={router}
                  theme={theme}
                  heading={heading}
                  projects={projects}
                  featured={featured}
                />
                <Effects />
              </Scroll>
              <Scroll html>
                <div
                  style={{
                    height: `${height * 100}vh`,
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <HtmlFooter contacts={contacts} />
                </div>
              </Scroll>
            </Suspense>
          </ScrollControls>
        </Canvas>
        <Loader />
      </>
    )
    : (
      <Html
        contacts={contacts}
        heading={heading}
        projects={projects}
        featured={featured}
      />
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

  const height = featured.reduce((sum: number, project: any) => {
    const factor = project.isLandscape ? 0.5 : 1;
    return sum + factor;
  }, 1.2); // 1 = Hero .2 = Footer

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
