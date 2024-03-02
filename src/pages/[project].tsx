import type { NextPage } from "next";

import styled from "styled-components";
import dynamic from "next/dynamic";

import Image from "next/legacy/image"; // @todo upgrade from legacy
import Link from "next/link";

import { getHome } from "../queries/getHome";
import { getProject } from "../queries/getProject";

import { StyledAssets, StyledIntro } from "../styles/projectpage";
import { StyledPage } from "../styles/homepage";

import Meta from "../utils/Meta";

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
            {!!client.length && (
              <li>
                <p>Client</p>
                <Meta data={client} />
              </li>
            )}
            {!!agency.length && (
              <li>
                <p>Agency</p>
                <Meta data={agency} />
              </li>
            )}
            {!!production.length && (
              <li>
                <p>Production</p>
                <Meta data={production} />
              </li>
            )}
            {!!director.length && (
              <li>
                <p>Director</p>
                <Meta data={director} />
              </li>
            )}
            {!!dop.length && (
              <li>
                <p>DoP</p>
                <Meta data={dop} />
              </li>
            )}
            {!!photographer.length && (
              <li>
                <p>Photographer</p>
                <Meta data={photographer} />
              </li>
            )}
            {!!editor.length && (
              <li>
                <p>Editor</p>
                <Meta data={editor} />
              </li>
            )}
            {!!post.length && (
              <li>
                <p>Post</p>
                <Meta data={post} />
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
