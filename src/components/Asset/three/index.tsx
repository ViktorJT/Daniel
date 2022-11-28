import { useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

import type { AssetType } from "../../../pages/index";

interface ThreeAssetType extends AssetType {
  boxWidth: number;
  boxHeight: number;
  index?: number;
}

const Image = ({ url }: { url: string }) => {
  const map = useTexture(url);
  return <meshBasicMaterial map={map} toneMapped={false} />;
};

const Video = ({ url }: { url: string }) => {
  const map = useVideoTexture(url, { loop: true });
  return <meshBasicMaterial map={map} toneMapped={false} />;
};

const Asset = (
  { url, mimeType, boxWidth, boxHeight, aspectRatio, index }: ThreeAssetType,
) => {
  // ! Find way to use isLandscape here

  const yOffset = boxHeight - boxWidth * aspectRatio.height;
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
      {mimeType.startsWith("image") ? <Image url={url} /> : <Video url={url} />}
    </mesh>
  );
};

export default Asset;
