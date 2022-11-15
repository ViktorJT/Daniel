// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)
import * as THREE from "three";
import {
  Preload,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import Link from "next/link";
import HTMLImage from "next/image";
import { Box, Flex } from "@react-three/flex";
import "../components/shiftMaterial";
import {
  StyledFooter,
  StyledHero,
  StyledHtml,
  StyledNavigation,
  StyledProject,
  StyledThree,
} from "./styles";
import { Suspense, useRef } from "react";

const Asset = ({ project, width, height }) => {
  const img = useTexture(project.src);
  const material = useRef();

  // ! Find way to use isLandscape here

  const yOffset = height - width * project.aspectRatio.height;
  const xOffset = width - height * project.aspectRatio.width;
  const arHeight = width * project.aspectRatio.height;
  const isOverflowing = arHeight > height;

  const scale = isOverflowing
    ? [height * project.aspectRatio.width, height, 1]
    : [width, width * project.aspectRatio.height, 1];

  const position = isOverflowing ? [-xOffset / 2, 0, 0] : [0, yOffset / 2, 0];

  const scroll = useScroll();
  let last = scroll.offset;
  const factor = 20;

  useFrame(() => {
    const shift = THREE.MathUtils.lerp(
      material.current.shift,
      (scroll.offset - last) * factor,
      1,
    );
    material.current.shift = shift;
    last = scroll.offset;
  });

  return (
    <mesh scale={scale} position={position}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shiftMaterial
        ref={material}
        map={img}
      />
    </mesh>
  );
};

const Three = ({ projects }) => {
  const { viewport, size } = useThree();

  const margin = viewport.width / 20;

  return (
    <Flex
      dir="column"
      position={[-viewport.width / 2, viewport.height / 2, 0]}
      size={[viewport.width, viewport.height, 0]}
      alignItems="flex-end"
      paddingRight={margin}
      paddingLeft={margin}
    >
      <Box height={viewport.height}>{}</Box>
      {projects.map((project, i) => {
        return (
          <Box
            height={project.isLandscape ? "50%" : "100%"}
            key={i}
            centerAnchor
            width="67%"
          >
            {(width, height) => (
              <Asset
                width={width}
                height={height}
                project={project}
              />
            )}
          </Box>
        );
      })}
    </Flex>
  );
};

const Project = (project) => {
  return (
    <StyledProject {...project}>
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
          style={{ opacity: 0 }}
        />
      </div>
    </StyledProject>
  );
};

const R3F = ({ height, projects }) => {
  return (
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
      >
        <Suspense fallback={null}>
          <StyledHtml html>
            <StyledHero>
              <h2>
                Excepteur cupidatat Lorem laborum tempor dolore culpa dolor
                exercitation aute id.
              </h2>
            </StyledHero>
            {projects.map((project, i) => <Project key={i} {...project} />)}
            <StyledFooter>
              <p>Ich bin ein Footer</p>
            </StyledFooter>
          </StyledHtml>

          <StyledThree>
            <Three projects={projects} />
          </StyledThree>
        </Suspense>
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
    const heightAspectRatio = project.height / project.width;
    const widthAspectRatio = project.width / project.height;
    project.isLandscape = isLandscape;
    project.aspectRatio = {
      height: heightAspectRatio,
      width: widthAspectRatio,
    };
  });

  const height = projects.reduce((sum, project) => {
    const factor = project.isLandscape ? 0.5 : 1;
    return sum + factor;
  }, 1.2);

  return {
    props: {
      height,
      projects,
    },
  };
}

export default Home;
