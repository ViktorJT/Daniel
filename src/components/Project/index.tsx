import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

import { StyledDetails, StyledThumbnail } from "./styles";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const Project = ({
  slug,
  title,
  client,
  director,
  photographer,
  projectMedia,
  video,
  thumbnail,
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
      <StyledDetails className="details">
        <p onClick={onClick}>{title}</p>
        <div className="meta">
          {[client, director, photographer].map((meta, i) => (
            <p key={i}>{meta}</p>
          ))}
        </div>
        <span className="divider" />
      </StyledDetails>
    </>
  );
};

export default Project;
