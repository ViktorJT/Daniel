import { Data } from "../../../pages";
import { StyledHero } from "./styles";

const Hero = ({ featured }: { featured: Data[] }) => {
  console.log("dont forget to do the html hero also", featured.length);

  return (
    <StyledHero>
      <h2>
        Excepteur cupidatat Lorem laborum tempor dolore culpa dolor exercitation
        aute id.
      </h2>
    </StyledHero>
  );
};

export default Hero;
