import { Box } from "@react-three/flex";
import * as THREE from "three";
import Asset from "../../Asset/three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { createRef, useMemo } from "react";

const Hero = ({ heading, centered = true, theme, featured, viewport }: any) => {
  const refs = useMemo(() => {
    return featured.map((_: any) => createRef());
  }, [featured]);

  const color = theme === "dark" ? "#FFF6E5" : "#131313";

  const itemsOnScreen = 3;
  const margin = (viewport.width / 100) * 5;
  const assetWidth = viewport.width / itemsOnScreen;

  const screenLeft = -viewport.width / 2 + margin;
  const screenRight = viewport.width - assetWidth;
  const backOfTheLine = -(featured.length - (itemsOnScreen - 1)) * assetWidth;

  // const margin = centered ? 0 : (viewport.height / 100) * 6; // 6vh

  useFrame((_, delta) => {
    const loaded = refs.every((ref: any) => ref.current);
    if (loaded) {
      refs.forEach((ref: any) => {
        ref.current.position.x += delta;
        if (ref.current.position.x > screenRight) {
          ref.current.position.x = backOfTheLine;
        }
      });
    }
  }, 0.1);

  return (
    <Box
      height={viewport.height}
      width={viewport.width}
      dir="row"
      centerAnchor
    >
      {(_, boxHeight) => (
        <>
          <Text
            maxWidth={viewport.width / 2}
            color={color}
            fontSize={0.335}
            letterSpacing={0.0085}
            anchorX="left"
            lineHeight={1.5}
            anchorY="middle"
            textAlign="left"
            position={new THREE.Vector3(screenLeft, 0, 0)}
            font="/fonts/PPNeueMontreal-Book.otf"
          >
            {heading}
          </Text>
          {featured.map(({ id, ...asset }: any, i: number) => {
            return (
              <Asset
                index={i}
                ref={refs[i]}
                centered={centered}
                key={`hero-a-${id}`}
                boxHeight={boxHeight}
                boxWidth={assetWidth}
                {...asset}
              />
            );
          })}
        </>
      )}
    </Box>
  );
};

export default Hero;
