// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)
import { Suspense } from "react";
import cleanProject from "../helpers/cleanProject";

import { Canvas, useThree } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Box, Flex } from "@react-three/flex";

import Effects from "../components/Effects/";

import { HtmlProject, ThreeProject } from "../components/Project/";
import { HtmlHero, ThreeHero } from "../components/Hero/";
import Footer from "../components/Footer/html";

import type { NextPage } from "next";
import styled from "styled-components";
import { getAllProjects } from "../queries/getAllProjects";

export interface AssetType {
  id: string;
  url: string;
  width: number;
  height: number;
  isLandscape: boolean;
  mimeType: "image" | "video";
  aspectRatio: {
    width: number;
    height: number;
  };
}

export interface Data {
  id?: string;
  title: string;
  client: string;
  director: string;
  featured: AssetType;
  assets: AssetType[];
}

type PropsType = Omit<HomeProps, "height">;

interface HomeProps {
  projects: Data[];
  featured: Data[];
  height: number;
}

const StyledPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  counter-reset: 'project';
`;

const Three = ({ projects, featured }: PropsType) => {
  const { viewport } = useThree();

  const margin = viewport.width / 20; // 5vw

  return (
    <Flex
      dir="column"
      position={[-viewport.width / 2, viewport.height / 2, 0]}
      size={[viewport.width, viewport.height, 0]}
    >
      <ThreeHero viewport={viewport} featured={featured} />
      <Box paddingLeft={margin} paddingRight={margin}>
        {projects.map(({ id, ...project }) => {
          console.log(id, project)
          return <ThreeProject key={`t-${id}`} viewport={viewport} {...project} />;
        })}
      </Box>
    </Flex>
  );
};

const Html = ({ projects, featured }: PropsType) => {
  return (
    <StyledPage>
      <HtmlHero featured={featured} />
      {projects.map(({id, ...project}) => (
        <HtmlProject
          key={`h-${id}`}
          {...project}
        />
      ))}
    </StyledPage>
  );
};

const Home: NextPage<HomeProps> = ({ height, featured, projects }) => {
  return (
    <Canvas
      linear={true}
      style={{
        position: "absolute",
        top: 0,
        touchAction: "none",
        backgroundColor: "#1c1c1c",
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
          <Scroll html>
            <Html projects={projects} featured={featured} />
            <Footer />
          </Scroll>
          <Scroll>
            <Three projects={projects} featured={featured} />
            <Effects />
          </Scroll>
        </Suspense>
      </ScrollControls>
    </Canvas>
  );
};

export async function getStaticProps() {
  const { projects } = await getAllProjects();

  if (!projects || projects.length === 0) {
    return {
      notFound: true,
    };
  }

  const data = projects.map((project: any) => cleanProject(project));

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
      projects: data,
      featured,
      height,
    },
  };
}

export default Home;
