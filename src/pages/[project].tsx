import type { NextPage } from "next";

import styled from "styled-components";
import dynamic from "next/dynamic";
import Image from "next/image";

import Link from "next/link";

import { getHome } from "../queries/getHome";
import { getProject } from "../queries/getProject";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const StyledPage = styled.div`
  position: relative;
  width: 100%;
  
  flex: 1 1 100%;

  display: flex;
  flex-flow: column nowrap;
`;

const StyledHero = styled.section`
  margin-top: 6vh;
  
  position: relative;

  width: 100%;
  height: 320px;

  overflow: hidden;


  video {
    object-fit: cover;
  }
`;

const StyledIntro = styled.section`
  div {
    margin: 0 auto;
    padding: 80px 40px;
    max-width: var(--containerWidth);
    display: flex;
    flex-flow: row wrap;
    
    justify-content: space-between;

    h2 {
      flex: 1 1 560px;
    }

    ul {
      flex: 1 1 33%;
      display: inherit;
      flex-flow: inherit;
      justify-content: space-between;
      
      gap: 24px;
        
      padding-top: 10px;
      text-align: right;

      li {
        flex: 1 1 40%;
      }

      li p:last-of-type {
        font-weight: bold;
      }
    }
    @media (max-width: 970px) {
      padding: 80px 2vw;
    }
  }
`;

const StyledAssets = styled.section`
  & > div {
    overflow: hidden;
    padding: 0 40px;
    max-width: var(--containerWidth);
    margin: 0 auto;

    align-items: flex-start;

    display: flex;
    flex-flow: row wrap;
    gap: 40px;

    & > * {
      flex: 1 1 440px;
    }
    
    @media (max-width: 970px) {
     padding: 0 2vw;
    }
  }
`;

const StyledNavigation = styled.section`
  nav {
    max-width: var(--containerWidth);
    margin: 0 auto;
    
    padding: 64px 40px;

    display: flex;
    gap: 40px;

    justify-content: space-between;
      
    div {
      display: flex;
      flex-flow: column nowrap;

      p {
        color: var(--primary-tint);
      }

      &:last-child {
        align-items: flex-end;
      }
    }

    a {
      text-decoration: none;


      color: var(--secondary);

      span: {
        display: block;
      }
      
      &:first-child {
      }
    }
    
    @media (max-width: 970px) {
      padding: 40px 2vw;
    }
  }
  
`;

const Project: NextPage<any> = (
  {
    title,
    director,
    client,
    stillsPhotographer,
    dop,
    agency,
    featuredMedia,
    projectMedia,
    previousProject,
    nextProject,
  },
) => {
  return (
    <StyledPage>
      <StyledHero>
        {featuredMedia.__typename === "Media"
          ? (
            <Image
              priority
              alt=""
              src={featuredMedia.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          )
          : (
            <ReactPlayer
              loop
              muted
              playing
              width="100%"
              height="100%"
              url={featuredMedia.url}
              config={{
                playerOptions: { responsive: true },
              }}
            />
          )}
      </StyledHero>
      <StyledIntro>
        <div>
          <h2>
            {title}
          </h2>
          <ul>
            <li>
              <p>Client</p>
              <p>{client}</p>
            </li>
            <li>
              <p>Director</p>
              <p>{director}</p>
            </li>
            {agency && (
              <li>
                <p>Agency</p>
                <p>{agency}</p>
              </li>
            )}
            {dop && (
              <li>
                <p>DoP</p>
                <p>{dop}</p>
              </li>
            )}
            {stillsPhotographer && (
              <li>
                <p>Stills</p>
                <p>{stillsPhotographer}</p>
              </li>
            )}
          </ul>
        </div>
      </StyledIntro>
      <StyledAssets>
        <div>
          {projectMedia.map((
            { id, url, __typename, ...asset }: any,
            i: number,
          ) =>
            __typename === "Media"
              ? (
                <Image
                  key={`pm-${i}-${id}`}
                  priority
                  alt=""
                  src={url}
                  layout="responsive"
                  objectFit="contain"
                  {...asset}
                />
              )
              : (
                <ReactPlayer
                  key={`pm-${i}-${id}`}
                  controls
                  width="100%"
                  height="100%"
                  url={url}
                  config={{
                    playerOptions: { responsive: true },
                  }}
                />
              )
          )}
        </div>
      </StyledAssets>
      <StyledNavigation>
        <nav>
          <div>
            <p>Previous</p>
            <Link href={previousProject.slug}>
              {`??? ${previousProject.title}`}
            </Link>
          </div>
          <div>
            <p>Next</p>
            <Link href={nextProject.slug}>
              {`${nextProject.title} ???`}
            </Link>
          </div>
        </nav>
      </StyledNavigation>
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
