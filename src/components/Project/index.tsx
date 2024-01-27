import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { StyledAsset, StyledDetails } from "./styles";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const Project = ({
  slug,
  title,
  featuredMedia,
  client,
  director,
  photographer,
  projectMedia,
}: any) => {
  const router = useRouter();

  const onClick = () => {
    if (projectMedia?.length >= 1)
  }

  return (
    <>
      <StyledAsset onClick={() => router.push(slug)} className="asset">
        {featuredMedia.__typename === "Media" ? (
          <Image
            alt=""
            src={featuredMedia.url}
            layout="responsive"
            objectFit="contain"
            {...featuredMedia}
          />
        ) : (
          <ReactPlayer
            playing
            muted
            loop
            width="100%"
            height="100%"
            config={{
              playerOptions: { responsive: true },
            }}
            {...featuredMedia}
          />
        )}
      </StyledAsset>
      <StyledDetails className="details">
        <Link href={slug}>{title}</Link>
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
