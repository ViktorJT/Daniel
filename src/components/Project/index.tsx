import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

import { StyledDetails, StyledThumbnail } from "./styles";
import { StyledIntro } from "../../styles/projectpage";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const Project = ({
  slug,
  title,
  client,
  director,
  photographer,
  production,
  dop,
  projectMedia,
  video,
  thumbnail,
  editor,
  post,
  setActiveVideo,
}: any) => {
  const router = useRouter();

  const onClick = () => {
    if (video) {
      setActiveVideo(video);
    } else if (projectMedia?.length) {
      router.push(slug);
    }
  };

  return (
    <>
      <StyledThumbnail
        alt=""
        onClick={onClick}
        layout="responsive"
        src={thumbnail.url}
        {...thumbnail}
      />
      <StyledDetails>
        <div>
          <h2 onClick={onClick}>{title}</h2>
          <ul>
            {client && (
              <li>
                <p>Client</p>
                <p>{client}</p>
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
      </StyledDetails>
    </>
  );
};

export default Project;
