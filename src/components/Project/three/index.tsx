import { Box } from "@react-three/flex";
import { Line, Text } from "@react-three/drei";
import Asset from "../../Asset/three";

import type { AssetType } from "../../../pages/index";
import * as THREE from "three";

interface ProjectType {
  title: string;
  client: string;
  director: string;
  asset: AssetType;
  viewport: any;
}

const ThreeProject = (
  { title, client, director, asset, viewport }: ProjectType,
) => {
  return (
    <>
      <Box>
        <Line
          points={[new THREE.Vector3(-0.05, 0, 0), new THREE.Vector3(viewport.width, 0, 0)]}
          color="#fff6e5"
        />
      </Box>
      <Box
        dir="row"
        height={asset.isLandscape ? viewport.height / 2 : viewport.height}
        width="100%"
        align="flex-start"
        justify="flex-start"
      >
        <Box
          dir="column"
          height={viewport.height / 4 - 0.18}
          width="32.2%"
          marginLeft={-0.07}
          paddingRight={(viewport.width / 100) * 2}
        >
          <Box
            grow={1}
            align="center"
            justify="center"
          >
            <Box width="100%">
              {(boxWidth) => (
                <Text
                  maxWidth={boxWidth}
                  font="/fonts/PPNeueMontreal-Book.otf"
                  fontSize={0.335}
                  letterSpacing={0.0085}
                  anchorX="left"
                  lineHeight={1.5}
                  anchorY="middle"
                  textAlign="left"
                >
                  {title}
                </Text>
              )}
            </Box>
          </Box>

          <Box
            dir="row"
            justify="space-between"
            height={0.18}
          >
            <Box width="100%">
              {(boxWidth) => (
                <Text
                  maxWidth={boxWidth / 2}
                  font="/fonts/PPNeueMontreal-Book.otf"
                  fontSize={0.135}
                  letterSpacing={0.0085}
                  anchorX="left"
                  anchorY="top"
                  textAlign="left"
                >
                  CLIENT
                </Text>
              )}
            </Box>
            <Box width="100%">
              {(boxWidth) => (
                <Text
                  maxWidth={boxWidth / 2}
                  font="/fonts/PPNeueMontreal-Book.otf"
                  fontSize={0.135}
                  letterSpacing={0.0085}
                  anchorX="right"
                  anchorY="top"
                  textAlign="right"
                >
                  DIRECTOR
                </Text>
              )}
            </Box>
          </Box>

          <Box
            dir="row"
            justify="space-between"
          >
            <Box width="100%">
              {(boxWidth) => (
                <Text
                  maxWidth={boxWidth / 2 + 0.1}
                  letterSpacing={0.0085}
                  font="/fonts/PPNeueMontreal-Bold.otf"
                  fontSize={0.135}
                  lineHeight={1.5}
                  anchorX="left"
                  anchorY="top"
                  textAlign="left"
                >
                  {client.toUpperCase()}
                </Text>
              )}
            </Box>
            <Box width="100%">
              {(boxWidth) => (
                <Text
                  maxWidth={boxWidth / 2 + 0.1}
                  font="/fonts/PPNeueMontreal-Bold.otf"
                  fontSize={0.135}
                  lineHeight={1.5}
                  anchorX="right"
                  anchorY="top"
                  textAlign="right"
                >
                  {director.toUpperCase()}
                </Text>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          width="67.89%"
          height="100%"
          centerAnchor
        >
          {(boxWidth, boxHeight) => (
            <Asset
              boxWidth={boxWidth}
              boxHeight={boxHeight}
              {...asset}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default ThreeProject;