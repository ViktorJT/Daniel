// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)
import { Suspense } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Flex } from "@react-three/flex";

import { HtmlProject, ThreeProject } from "../components/Project/";
import { HtmlHero, ThreeHero } from "../components/Hero/";
import Footer from "../components/Footer/html";

import type { NextPage } from "next";

export interface Image {
  src: string;
  width: number;
  height: number;
  isLandscape?: boolean;
  aspectRatio?: {
    width: number;
    height: number;
  };
}

export interface Data {
  title: string;
  client: string;
  director: string;
  image: Image;
}

interface HomeProps {
  projects: Data[];
  height: number;
}

const Three = ({ projects }: { projects: Data[] }) => {
  const { viewport } = useThree();

  const margin = viewport.width / 20; // 5 vw

  return (
    <Flex
      dir="column"
      position={[-viewport.width / 2, viewport.height / 2, 0]}
      size={[viewport.width, viewport.height, 0]}
      alignItems="flex-end"
      paddingRight={margin}
      paddingLeft={margin}
    >
      <ThreeHero {...viewport} />
      {projects.map((project, i: number) => {
        return <ThreeProject key={i} {...project} />;
      })}
    </Flex>
  );
};

const Html = ({ projects }: { projects: Data[] }) => {
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        counterReset: "project",
      }}
    >
      <HtmlHero />
      {projects.map((project, i: number) => (
        <HtmlProject
          key={i}
          {...project}
        />
      ))}
      <Footer />
    </main>
  );
};

const Home: NextPage<HomeProps> = ({ height, projects }) => {
  return (
    <>
      <Canvas
        linear={true}
        style={{
          position: "absolute",
          top: 0,
          touchAction: "none",
          backgroundColor: "#1c1c1c",
        }}
      >
        <Preload all />
        <ScrollControls
          pages={height} // Each page takes 100% of the height of the canvas
          distance={1}
          damping={4}
          style={{
            width: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            counterReset: "project",
          }}
        >
          <Suspense fallback={null}>
            <Scroll html>
              <Html projects={projects} />
            </Scroll>
            <Scroll>
              <Three projects={projects} />
            </Scroll>
          </Suspense>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export async function getStaticProps() {
  const data: Data[] = [
    {
      title: "Project title",
      client: "Client name",
      director: "Director name",
      image: {
        src: "/img/169.jpg",
        width: 1600,
        height: 900,
      },
    },
    {
      title: "Project title",
      client: "Client name",
      director: "Director name",
      image: {
        src: "/img/45.jpg",
        width: 400,
        height: 500,
      },
    },
  ];

  data.forEach(({ image }) => {
    const isLandscape = image.width > image.height;
    const heightAspectRatio = image.height / image.width;
    const widthAspectRatio = image.width / image.height;
    image.isLandscape = isLandscape;
    image.aspectRatio = {
      height: heightAspectRatio,
      width: widthAspectRatio,
    };
  });

  const height = data.reduce((sum, { image }) => {
    const factor = image.isLandscape ? 0.5 : 1;
    return sum + factor;
  }, 1.2); // 1 = Hero, .2 = Footer

  return {
    props: {
      height,
      projects: data,
    },
  };
}

export default Home;
