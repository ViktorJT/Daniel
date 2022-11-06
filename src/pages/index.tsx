// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)

import { Preload, Scroll, ScrollControls, useAspect, Image as ThreeImage } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import Link from "next/link";
import HTMLImage from "next/image";
import { Box, Flex } from "@react-three/flex";
import {
  StyledHero,
  StyledHtml,
  StyledNavigation,
  StyledProject,
  StyledThree,
} from "./styles";

const Three = ({ projects }) => {
  const { viewport, size } = useThree();

  console.log({ viewport, size });

  return (
    <StyledThree>
      <Flex
        dir="column"
        position={[-viewport.width / 2, viewport.height / 2, 0]}
        size={[viewport.width, viewport.height, 0]}
        alignItems="flex-end"
        width="100%"
        // paddingTop={viewport.height}
      >
        <Box height={viewport.height}>{}</Box>
        {projects.map((project, i) => {
          return (
            <Box
              // dir="row"
              height={project.isLandscape ? "50%" : "100%"}
              key={i}
              centerAnchor
              width="50%"
            >
              {(width, height) => {
                console.log({ width, height });

                // const scale = project.isLandscape
                //   ? useAspect(
                //     size.width,
                //     size.width * project.aspectRatio,
                //     0.5,
                //   )
                //   : useAspect(
                //     size.height,
                //     size.height * project.aspectRatio,
                //     0.5,
                //   );

                return (
                  <ThreeImage
                    url={project.src}
                    scale={[width, width * project.aspectRatio, 1]}
                  />
                );
              }}
            </Box>
          );
        })}
      </Flex>
    </StyledThree>
  );
};

const R3F = ({ height, projects }) => {
  return (
    <Canvas
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
      >
        <StyledHtml html>
          <StyledHero>
            <h2>
              Excepteur cupidatat Lorem laborum tempor dolore culpa dolor
              exercitation aute id.
            </h2>
          </StyledHero>
          {projects.map((project, i) => {
            return (
              <StyledProject
                {...project}
                key={i}
              >
                <div>
                  <div className="details">
                    <h3>Project title</h3>
                    <p className="client">
                      Client<span>Client name</span>
                    </p>
                    <p className="director">
                      Director<span>Director name</span>
                    </p>
                  </div>
                  <HTMLImage
                    {...project}
                    layout="responsive"
                    objectFit="contain"
                    objectPosition="top left"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              </StyledProject>
            );
          })}
        </StyledHtml>
        <Three projects={projects} />
      </ScrollControls>
    </Canvas>
  );
};

const Home: NextPage = (props) => {
  return (
    <>
      <StyledNavigation>
        <ul>
          <li className="home">
            <Link href="/">Daniel Arfwedson</Link>
          </li>
          <li className="about">
            <Link href="/about">About</Link>
          </li>
          <li className="theme">
            <button>click me</button>
          </li>
        </ul>
      </StyledNavigation>
      <R3F {...props} />
    </>
  );
};

export async function getStaticProps(context) {
  const projects = [
    {
      src: "/img/169.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "/img/45.jpg",
      width: 400,
      height: 500,
    },
  ];

  projects.forEach((project) => {
    const isLandscape = project.width > project.height;
    const aspectRatio = project.height / project.width;
    // const aspectRatio = isLandscape
    //   ? project.height / project.width
    //   : project.width / project.height;
    project.isLandscape = isLandscape;
    project.aspectRatio = aspectRatio;
  });

  const height = projects.reduce((sum, project) => {
    const landscape = project.width > project.height;
    const factor = landscape ? 0.5 : 1;
    return sum + factor;
  }, 1);

  return {
    props: {
      height,
      projects,
    },
  };
}

export default Home;
