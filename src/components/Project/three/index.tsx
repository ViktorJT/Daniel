import { Box } from "@react-three/flex";
import { Line, Text } from "@react-three/drei";
import Asset from "../../Asset/three";

import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const ThreeProject = (
  { theme, router, slug, title, client, director, featured, index }: any,
) => {
  const color = theme === "dark" ? "#FFF6E5" : "#131313";
  const { viewport } = useThree();

  index = index < 10 ? `0${index}` : index;

  return (
    <Box>
      <Box>
        <Line
          points={[
            new THREE.Vector3(-0.05, 0, 0),
            new THREE.Vector3(viewport.width, 0, 0),
          ]}
          color={color}
        />
        <Text
          color={color}
          fontSize={0.1}
          letterSpacing={0.5}
          anchorX="left"
          lineHeight={1.5}
          anchorY="middle"
          textAlign="left"
          position={new THREE.Vector3(-(viewport.width / 100) * 3, 0, 0)}
          font="/fonts/PPNeueMontreal-Book.otf"
        >
          {index}
        </Text>
      </Box>
      <Box
        dir="row"
        height={featured.isLandscape ? viewport.height / 2 : viewport.height}
        width="100%"
        align="flex-start"
        justify="flex-start"
        paddingBottom={(viewport.height / 100) * 5}
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
                  color={color}
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
                  color={color}
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
                  color={color}
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
                  color={color}
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
                  color={color}
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
          {(boxWidth, boxHeight) => {
            return (
              <Asset
                boxHeight={boxHeight}
                boxWidth={boxWidth}
                router={router}
                slug={slug}
                {...featured}
              />
            );
          }}
        </Box>
      </Box>
    </Box>
  );
};

export default ThreeProject;

