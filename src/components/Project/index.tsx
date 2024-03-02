import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

import { StyledDetails, StyledThumbnail } from "./styles";
import { StyledIntro } from "../../styles/projectpage";

import Meta from "../../utils/Meta";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const Project = ({
  slug,
  title,
  projectMedia,
  video,
  thumbnail,
  setActiveVideo,
  // metadata
  client,
  director,
  photographer,
  production,
  dop,
  editor,
  post,
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
            {!!client.length && (
              <li>
                <p>Client</p>
                <Meta data={client} />
              </li>
            )}
            {!!production.length && (
              <li>
                <p>Production</p>
                <Meta data={production} />
              </li>
            )}
            {!!director.length && (
              <li>
                <p>Director</p>
                <Meta data={director} />
              </li>
            )}
            {!!dop.length && (
              <li>
                <p>DoP</p>
                <Meta data={dop} />
              </li>
            )}
            {!!photographer.length && (
              <li>
                <p>Photographer</p>
                <Meta data={photographer} />
              </li>
            )}
            {!!editor.length && (
              <li>
                <p>Editor</p>
                <Meta data={editor} />
              </li>
            )}
            {!!post.length && (
              <li>
                <p>Post</p>
                <Meta data={post} />
              </li>
            )}
          </ul>
        </div>
      </StyledDetails>
    </>
  );
};

export default Project;
