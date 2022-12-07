// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)
import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getHome } from "../queries/getHome";
import { getProject } from "../queries/getProject";
import cleanProject from "../helpers/cleanProject";
import { HtmlFooter } from "../components/Footer";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
      padding-top: 10px;
      text-align: right;

      li + li {
        margin-top: 40px;
      }

      li p:last-of-type {
        font-weight: bold;
      }
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
  }
  
`;

interface VideoWrapperProps {
  readonly ratio: number;
}

const StyledVideoWrapper = styled.div<VideoWrapperProps>`
  position: relative;
`;

const Asset = (asset: any) => {
  if (asset.mimeType.startsWith("image")) {
    return (
      <Image
        alt=""
        objectFit="contain"
        src={asset.url}
        width={asset.width}
        height={asset.height}
        objectPosition="top left"
      />
    );
  }
  if (asset.mimeType.startsWith("video")) {
    return (
      <StyledVideoWrapper
        ratio={asset.isLandscape
          ? asset.aspectRatio.height * 100
          : asset.aspectRatio.width * 100}
      >
        <ReactPlayer
          loop
          muted
          playing
          controls
          top={0}
          left={0}
          width="100%"
          height="100%"
          url={asset.url}
          position="absolute"
        />
      </StyledVideoWrapper>
    );
  }
  return <></>;
};

const Home: NextPage<any> = (
  {
    contacts,
    title,
    director,
    client,
    featured,
    assets,
    previousProject,
    nextProject,
  },
) => {
  return (
    <StyledPage>
      <StyledHero>
        {featured.mimeType.startsWith("image")
          ? (
            <Image
              priority
              alt=""
              src={featured.url}
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
              top={0}
              left={0}
              width="100%"
              height="100%"
              url={featured.url}
              position="absolute"
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
          </ul>
        </div>
      </StyledIntro>
      <StyledAssets>
        <div>
          {assets.map(({ id, ...asset }: any) => (
            <Asset key={`pr=${id}`} {...asset} />
          ))}
        </div>
      </StyledAssets>
      <StyledNavigation>
        <nav>
          <div>
            <p>Previous</p>
            <Link href={previousProject.slug}>
              {`❮ ${previousProject.title}`}
            </Link>
          </div>
          <div>
            <p>Next</p>
            <Link href={nextProject.slug}>
              {`${nextProject.title} ❯`}
            </Link>
          </div>
        </nav>
      </StyledNavigation>
      <HtmlFooter contacts={contacts} />
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
  const { homes, project, contacts } = await getProject(params.project);
  
  if (!project) return { notFound: true };

  const allProjects = homes[0].projects;

  const currentProjectId = project.id;

  const currentIndex = allProjects.findIndex(({ id }: any) =>
    id === currentProjectId
  );

  const isFirstProject = currentIndex === 0;
  const isLastProject = currentIndex === allProjects.length - 1;

  const previousProject = isFirstProject
    ? allProjects[allProjects.length - 1]
    : allProjects[currentIndex - 1];

  const nextProject = isLastProject
    ? allProjects[0]
    : allProjects[currentIndex + 1];


  const data = cleanProject(project);

  return { props: { contacts, previousProject, nextProject, ...data } };
}

export default Home;
