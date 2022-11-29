import Asset from "../../Asset/html";
import { StyledHero, StyledMarquee } from "./styles";

const Hero = ({ heading, featured }: any) => {
  return (
    <StyledHero>
      <StyledMarquee gradient={false} direction="right" speed={100}>
        {featured.map(({id, ...asset}: any) => (
          <div className="asset" key={`a-${id}`}>
            <Asset
              mimeType={asset.mimeType}
              url={asset.url}
              width={asset.width}
              height={asset.height}
            />
          </div>
        ))}
      </StyledMarquee>
      <h1>{heading}</h1>
    </StyledHero>
  );
};

export default Hero;
