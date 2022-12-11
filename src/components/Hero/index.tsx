import Image from "next/image";
import ReactPlayer from "react-player/vimeo";
import { useRouter } from "next/router";

import { StyledHero, StyledMarquee, StyledMedia } from "./styles";

const Hero = ({ heading, featuredMedias }: any) => {

  const router = useRouter()
  
  return (
    <StyledHero>
      <h1>{heading}</h1>
      <StyledMarquee
        gradient={false}
        direction="right"
        speed={160}
      >
        {featuredMedias.map(({ id, title, slug, director, ...asset }: any) => {
          return (
            <StyledMedia onClick={() => router.push(slug)} key={`a-${id}`}>
              {asset.__typename === "Media"
                ? (
                  <Image
                    priority
                    as="a"
                    alt=""
                    src={asset.url}
                    layout="responsive"
                    objectFit="contain"
                    {...asset}
                  />
                )
                : (
                  <ReactPlayer
                    wrapper="a"
                    playing
                    muted
                    loop
                    style={{ pointerEvents: "none" }}
                    width="100%"
                    height="100%"
                    config={{
                      playerOptions: { responsive: true },
                    }}
                    {...asset}
                  />
                )}
              <div className="meta">
                <p>{title}</p>
                <p>{director}</p>
              </div>
            </StyledMedia>
          );
        })}
      </StyledMarquee>
    </StyledHero>
  );
};

export default Hero;
