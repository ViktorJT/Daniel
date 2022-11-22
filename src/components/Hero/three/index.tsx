import type { Data } from "../../../pages";
import { Box } from "@react-three/flex";
import Asset from "../../Asset/three";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface HeroType {
  featured: Data[];
  viewport: {
    width: number;
    height: number;
  };
}

const Hero = ({ featured, viewport }: HeroType) => {

  // This setup needs at least four images

  // Use ref on each asset instead, and move it to the back of the group once its passed the screen?
  // Something like: if asset.x = viewport.width (its off screen) => asset.x = -featured.length * viewport.width / 3 (put it at the back)
  
  const first = useRef<any>();
  const second = useRef<any>();
  const assetWidth = viewport.width / 3;
  const groupWidth = featured.length * assetWidth;
  const threshold = groupWidth + viewport.width;

  // const margin = (viewport.height / 100) * 6; // 6vh

  useFrame((_, delta) => {
    if (first.current && second.current) {
      if (first.current.position.x > threshold) {
        first.current.position.x = 0;
      }
      if (second.current.position.x > threshold) {
        second.current.position.x = 0;
      }

      // Lerp with acceleration from scrollSpeed up / down?

      first.current.position.x += delta;
      second.current.position.x += delta;
    }
  }, 0.1);

  return (
    <Box
      height={viewport.height}
      width={viewport.width}
      dir="row"
      centerAnchor
    >
      {(boxWidth, boxHeight) => {
        return (
          <group position={new THREE.Vector3(-groupWidth, 0, 0)}>
            <group ref={first} position={new THREE.Vector3(groupWidth, 0, 0)}>
              {featured.map((project, i) => (
                <Asset
                  index={i}
                  centered
                  key={`hero-a-${i}`}
                  boxWidth={boxWidth / 3}
                  boxHeight={boxHeight}
                  {...project.asset}
                />
              ))}
            </group>
            <group ref={second} position={new THREE.Vector3(0, 0, 0)}>
              {featured.map((project, i) => (
                <Asset
                  index={i}
                  centered
                  key={`hero-b-${i}`}
                  boxWidth={boxWidth / 3}
                  boxHeight={boxHeight}
                  {...project.asset}
                />
              ))}
            </group>
          </group>
        );
      }}
    </Box>
  );
};

export default Hero;
