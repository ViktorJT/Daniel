import type { NextPage } from "next";

import styled from "styled-components";
import dynamic from "next/dynamic";
import Image from "next/image";

import Link from "next/link";

import { getHome } from "../queries/getHome";
import { getProject } from "../queries/getProject";

import { StyledAssets, StyledIntro } from "../styles/projectpage";
import { StyledPage } from "../styles/homepage";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const Project: NextPage<any> = ({
  title,
  director,
  client,
  photographer,
  dop,
  agency,
  production,
  featuredMedia,
  projectMedia,
  previousProject,
  nextProject,
}) => {
  return (
    <StyledPage>
      <StyledAssets>
        <div>
          {projectMedia.map(
            ({ id, url, large, __typename, ...asset }: any, i: number) => (
              <div
                key={`pm-${i}-${id}`}
                className={large ? "large" : undefined}
              >
                <Image priority fill alt="" src={url} {...asset} />
              </div>
            ),
          )}
        </div>
      </StyledAssets>
      <StyledIntro>
        <div>
          <h2>{title}</h2>
          <ul>
            <li>
              <p>Client</p>
              <p>{client}</p>
            </li>
            {director && (
              <li>
                <p>Director</p>
                <p>{director}</p>
              </li>
            )}
            {agency && (
              <li>
                <p>Agency</p>
                <p>{agency}</p>
              </li>
            )}
            {production && (
              <li>
                <p>Production</p>
                <p>{production}</p>
              </li>
            )}
            {dop && (
              <li>
                <p>DoP</p>
                <p>{dop}</p>
              </li>
            )}
            {photographer && (
              <li>
                <p>Photographer</p>
                <p>{photographer}</p>
              </li>
            )}
          </ul>
        </div>
      </StyledIntro>
    </StyledPage>
  );
};

export async function getStaticPaths() {
  const { home } = await getHome();

  const { projects } = home;

  const paths = projects.map(({ slug }: any) => ({
    params: { project: slug },
    locale: "en",
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const project = await getProject(params.project);

  if (!project) return { notFound: true };

  return { props: project };
}

export default Project;
