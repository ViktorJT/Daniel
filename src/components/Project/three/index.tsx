import { Box } from "@react-three/flex";
import Asset from "../../Asset/three";

import type { Image } from "../../../pages/index";

const Project = ({ image }: {image: Image} ) => {
  return (
    <Box
      height={image.isLandscape ? "50%" : "100%"}
      centerAnchor
      width="67%"
    >
      {(boxWidth, boxHeight) => (
        <Asset
          boxWidth={boxWidth}
          boxHeight={boxHeight}
          {...image}
        />
      )}
    </Box>
  );
};

export default Project;
