import { StyledProject } from "./styles";
import Image from "next/image";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Asset = ({ slug, mimeType, ...props }: any) => {
  const router = useRouter();

  if (mimeType.startsWith("image")) {
    return (
      <Image
        onClick={() => router.push(slug)}
        alt=""
        src={props.url}
        className="image"
        layout="responsive"
        objectFit="contain"
        width={props.width}
        height={props.height}
        objectPosition="top left"
      />
    );
  }

  if (mimeType.startsWith("video")) {
    return (
      <ReactPlayer
        loop
        muted
        playing
        top={0}
        left={0}
        width="100%"
        height="100%"
        url={props.url}
        position="absolute"
        onClick={() => router.push(slug)}
      />
    );
  }

  return <></>;
};

const Project = ({ slug, title, client, director, featured }: any) => {
  return (
    <StyledProject>
      <div className="wrapper">
        <div className="details">
          <Link href={slug}>
            {title}
          </Link>
          <p className="heading">Client</p>
          <p className="heading">Director</p>
          <p className="labels">{client}</p>
          <p className="labels">{director}</p>
        </div>
        <div className="asset">
          <Asset slug={slug} {...featured} />
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;
