import { useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

import type { AssetType } from "../../../pages/index";

interface ThreeAssetType extends AssetType {
  boxWidth: number;
  boxHeight: number;
  index?: number;
  centered?: boolean;
}

interface SrcType {
  src: string;
}

const Image = ({ src }: SrcType) => {
  const map = useTexture(src);
  return <meshBasicMaterial map={map} toneMapped={false} />;
};

const Video = ({ src }: SrcType) => {
  const map = useVideoTexture(src, { loop: true });
  return <meshBasicMaterial map={map} toneMapped={false} />;
};

const Asset = (
  { src, mimeType, boxWidth, boxHeight, aspectRatio, index, centered = false }: ThreeAssetType,
) => {
  // ! Find way to use isLandscape here

  const yOffset = centered ? 0 : boxHeight - boxWidth * aspectRatio.height;
  const xOffset = boxWidth - boxHeight * aspectRatio.width;
  const arHeight = boxWidth * aspectRatio.height;
  const isOverflowing = arHeight > boxHeight;

  const scale = isOverflowing
    ? new THREE.Vector3(boxHeight * aspectRatio.width, boxHeight, 1)
    : new THREE.Vector3(boxWidth, boxWidth * aspectRatio.height, 1);

  let position = isOverflowing
    ? new THREE.Vector3(-xOffset / 2, 0, 0)
    : new THREE.Vector3(0, yOffset / 2, 0);

  if (index) {
    position.x = index * boxWidth;
  }

  return (
    <mesh scale={scale} position={position}>
      <planeGeometry args={[1, 1, 32, 32]} />
      {mimeType === "image" ? <Image src={src} /> : <Video src={src} />}
    </mesh>
  );
};

export default Asset;
