import { StyledProject } from "./styles";
import Image from "next/image";

import type { Data } from "../../../pages/index";

const Project = ({ title, client, director, image }: Data) => {
  return (
    <StyledProject isLandscape={image.isLandscape}>
      <div>
        <div className="details">
          <h3>{title}</h3>
          <p className="client">
            Client<span>{client}</span>
          </p>
          <p className="director">
            Director<span>{director}</span>
          </p>
        </div>
        <Image
          {...image}
          layout="responsive"
          objectFit="contain"
          objectPosition="top left"
          style={{ opacity: 0 }}
        />
      </div>
    </StyledProject>
  );
};

export default Project;
