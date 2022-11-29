import { StyledProject, StyledPlayerWrapper, StyledReactPlayer } from "./styles";
import Image from "next/image";

import type { Data } from "../../../pages/index";

const Project = ({ title, client, director, featured }: Data) => {
  return (
    <StyledProject isLandscape={featured.isLandscape}>
      <div>
        <div className="details">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="headings">
            <p>Client</p>
            <p>Director</p>
          </div>
          <div className="labels">
            <p>{client}</p>
            <p>{director}</p>
          </div>
        </div>
        {featured.mimeType.startsWith("image")
          ? (
            <Image
              className="image"
              src={featured.url}
              {...featured}
              alt=""
              layout="responsive"
              objectFit="contain"
              objectPosition="top left"
            />
          )
          : (
            <StyledPlayerWrapper>
              {/* <StyledReactPlayer light muted playing {...featured} /> */}
            </StyledPlayerWrapper>
          )}
      </div>
    </StyledProject>
  );
};

export default Project;
