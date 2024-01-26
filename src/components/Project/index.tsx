import { StyledProject } from "./styles";
import Image from "next/image";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const Project = ({
  photoProject = false,
  slug,
  title,
  featuredMedia,
  client,
  director,
  photographer,
}: any) => {
  const router = useRouter();
  return (
    <StyledProject>
      <div onClick={() => router.push(slug)} className="asset">
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
      </div>
      <div className="details">
        <Link href={slug}>{title}</Link>
        <div className="meta">
          {[client, director, photographer].map((meta, i) => (
            <p key={i}>{meta}</p>
          ))}
        </div>
        <span className="divider" />
      </div>
    </StyledProject>
  );
};

export default Project;
