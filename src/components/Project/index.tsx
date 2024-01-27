import { StyledProject } from "./styles";
import Image from "next/image";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const Project = ({
  slug,
  title,
  client,
  director,
  featuredMedia,
  photographer,
}: any) => {
  const router = useRouter();
  return (
    <StyledProject>
      <div className="wrapper">
        <div className="details">
          <Link href={slug}>{title}</Link>
          <p>
            <span>Client</span>
            {client}
          </p>
          {photographer && (
            <p>
              <span>Photographer</span>
              {photographer}
            </p>
          )}
          {director && (
            <p>
              <span>Director</span>
              {director}
            </p>
          )}
        </div>
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
      </div>
    </StyledProject>
  );
};

export default Project;
