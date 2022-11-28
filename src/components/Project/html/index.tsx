import { StyledProject } from "./styles";
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
        {featured.mimeType === "image"
          ? (
            <Image
              {...featured}
              alt=""
              layout="responsive"
              objectFit="contain"
              objectPosition="top left"
              style={{ opacity: 0 }}
            />
          )
          : null}
      </div>
    </StyledProject>
  );
};

export default Project;
