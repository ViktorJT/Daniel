// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)
import { Suspense } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Box, Flex } from "@react-three/flex";

import Effects from "../components/Effects/";

import { HtmlProject, ThreeProject } from "../components/Project/";
import { HtmlHero, ThreeHero } from "../components/Hero/";
import Footer from "../components/Footer/html";

import type { NextPage } from "next";

export interface AssetType {
  src: string;
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
  title: string;
  client: string;
  director: string;
  asset: AssetType;
  isFeatured: boolean;
}

type PropsType = Omit<HomeProps, "height">;

interface HomeProps {
  projects: Data[];
  featured: Data[];
  height: number;
}

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
        {projects.map((project, i: number) => {
          return <ThreeProject key={i} viewport={viewport} {...project} />;
        })}
      </Box>
    </Flex>
  );
};

const Html = ({ projects, featured }: PropsType) => {
  return (
    <main
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        counterReset: "project",
        minWidth: '100vw'
      }}
    >
      <HtmlHero featured={featured} />
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

const Home: NextPage<HomeProps> = ({ height, projects, featured }) => {
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
          damping={5}
        >
          <Suspense fallback={null}>
            <Scroll html>
              <Html projects={projects} featured={featured} />
            </Scroll>
            <Scroll>
              <Three projects={projects} featured={featured} />
              <Effects />
            </Scroll>
          </Suspense>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export async function getStaticProps() {
  const data: any = [
    {
      title: "Project title",
      client: "Client name",
      director: "Director name",
      isFeatured: true,
      asset: {
        src: "/img/45.jpg",
        width: 400,
        height: 500,
        mimeType: "image",
      },
    },
    {
      title: "Project title that is very very very long",
      client: "Client name",
      director: "Director name",
      isFeatured: true,
      asset: {
        src: "/img/169.jpg",
        width: 1600,
        height: 900,
        mimeType: "image",
      },
    },
    {
      title: "Project title",
      client: "Client name that is very very long",
      director: "Director name that is very very long",
      isFeatured: true,
      asset: {
        src: "/video/45.mp4",
        width: 760,
        height: 1080,
        mimeType: "video",
      },
    },
    {
      title: "Project title",
      client: "Client name",
      director: "Director name",
      isFeatured: true,
      asset: {
        src: "/video/169.mp4",
        width: 1920,
        height: 1080,
        mimeType: "video",
      },
    },
  ];

  data.forEach(({ asset }: any) => {
    const isLandscape = asset.width > asset.height;
    const heightAspectRatio = asset.height / asset.width;
    const widthAspectRatio = asset.width / asset.height;
    asset.isLandscape = isLandscape;
    asset.aspectRatio = {
      height: heightAspectRatio,
      width: widthAspectRatio,
    };
  });

  const height = data.reduce((sum: number, { asset }: any) => {
    const factor = asset.isLandscape ? 0.5 : 1;
    return sum + factor;
  }, 1.2); // 1 = Hero, .2 = Footer

  const featured = data.filter((project: any) => project.isFeatured);

  return {
    props: {
      projects: data,
      featured,
      height,
    },
  };
}

export default Home;
