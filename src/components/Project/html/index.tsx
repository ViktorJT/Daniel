import { StyledProject } from "./styles";
import Image from "next/image";

import dynamic from "next/dynamic";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Asset = ({ mimeType, ...props }: any) => {
  if (mimeType.startsWith("image")) {
    return (
      <Image
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
        light
        style={{ position: "absolute", top: 0, left: 0 }}
        height="100%"
        width="100%"
        url="https://media.graphassets.com/RiAOYDxMQHqXtLum1P42"
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
          <Asset {...featured} />
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;
