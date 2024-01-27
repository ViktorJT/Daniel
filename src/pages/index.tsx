import { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import type { NextPage } from "next";

import Project from "../components/Project/";
import Modal from "../components/Modal";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

import { getHome } from "../queries/getHome";
import { StyledPage } from "../styles/homepage";

const Home: NextPage<any> = ({ heading, featuredMedias, projects }) => {
  const [activeVideo, setActiveVideo] = useState<string>();

  useEffect(() => {
    console.log(activeVideo);
  }, [activeVideo]);

  return (
    <StyledPage>
      {projects.map(({ id, ...project }: any, i: number) => (
        <Project
          key={`h-${i}-${id}`}
          setActiveVideo={setActiveVideo}
          {...project}
        />
      ))}

      <Modal isOpen={activeVideo} onClose={() => setActiveVideo(undefined)}>
        <ReactPlayer
          loop
          controls
          playing
          height="100%"
          width="100%"
          url={activeVideo}
          config={{
            playerOptions: {
              responsive: true,
            },
          }}
        />
      </Modal>
    </StyledPage>
  );
};

export async function getStaticProps() {
  const { home } = await getHome();

  if (!home) return { notFound: true };

  return {
    props: home,
  };
}

export default Home;
