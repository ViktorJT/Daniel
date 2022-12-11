import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { StyledHero, StyledMarquee, StyledMedia } from "./styles";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const Hero = ({ heading, featuredMedias }: any) => {
  console.log(featuredMedias);
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
            <StyledMedia title={title} key={`a-${id}`}>
              <Link href={slug}>
                {asset.__typename === "Media"
                  ? (
                    <Image
                      priority
                      alt=""
                      src={asset.url}
                      layout="responsive"
                      objectFit="contain"
                      {...asset}
                    />
                  )
                  : (
                    <ReactPlayer
                      playing
                      muted
                      loop
                      width="100%"
                      height="100%"
                      config={{
                        playerOptions: { responsive: true },
                      }}
                      {...asset}
                    />
                  )}
              </Link>
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
