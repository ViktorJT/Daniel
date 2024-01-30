import type { NextPage } from "next";

import styled from "styled-components";
import dynamic from "next/dynamic";

import Image from "next/legacy/image"; // @todo upgrade from legacy
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
  post,
  editor,
  agency,
  production,
  projectMedia,
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
                <Image
                  priority
                  alt=""
                  src={url}
                  layout="responsive"
                  objectFit="contain"
                  {...asset}
                />
              </div>
            ),
          )}
        </div>
      </StyledAssets>
      <StyledIntro>
        <div>
          <h2>{title}</h2>
          <ul>
            {client && (
              <li>
                <p>Client</p>
                <p>{client}</p>
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
            {director && (
              <li>
                <p>Director</p>
                <p>{director}</p>
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
            {editor && (
              <li>
                <p>Editor</p>
                <p>{editor}</p>
              </li>
            )}
            {post && (
              <li>
                <p>Post</p>
                <p>{post}</p>
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
