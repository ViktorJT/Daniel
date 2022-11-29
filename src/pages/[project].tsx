// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)
import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getAllProjects } from "../queries/getAllProjects";
import { getProject } from "../queries/getProject";
import cleanProject from "../helpers/cleanProject";

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

interface VideoWrapperProps {
  readonly ratio: number;
}

const StyledVideoWrapper = styled.div<VideoWrapperProps>`
  position: relative;
  padding-top: ${(props) => props.ratio}%;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Asset = (asset: any) => {
  if (asset.mimeType.startsWith("image")) {
    return (
      <Image
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
      <StyledVideoWrapper ratio={asset.aspectRatio.width * 100}>
        <StyledReactPlayer
          url={asset.url}
          width="100%"
          height="100%"
        />
      </StyledVideoWrapper>
    );
  }
  return <></>;
};

const Home: NextPage<Data> = (
  { title, director, client, featured, assets },
) => {
  return (
    <StyledPage>
      <StyledHero>
        {featured.mimeType.startsWith("image")
          ? (
            <Image
              src={featured.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          )
          : null}
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
          {assets.map((asset, i) => <Asset key={i} {...asset} />)}
        </div>
      </StyledAssets>
    </StyledPage>
  );
};

export async function getStaticPaths() {
  const { projects } = await getAllProjects();

  const paths = projects.map(({ slug }) => ({ params: { project: slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { project } = await getProject(params.project);

  if (!project) return { notFound: true };

  const data = cleanProject(project);

  return { props: { ...data } };
}

export default Home;
