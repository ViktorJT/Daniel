import { useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

const ThreeImage = ({ url }: { url: string }) => {
  const map = useTexture(url);
  return <meshBasicMaterial map={map} toneMapped={false} />;
};

const Video = ({ url }: { url: string }) => {
  const map = useVideoTexture(url, { loop: true });
  return <meshBasicMaterial map={map} toneMapped={false} />;
};

const Asset = (
  { centered, url, mimeType, boxWidth, boxHeight, aspectRatio, index }: any,
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
    : new THREE.Vector3(0, centered ? 0 : yOffset / 2, 0);

  if (index) {
    position.x = index * boxWidth;
  }

  return (
    <mesh scale={scale} position={position}>
      <planeGeometry args={[1, 1, 32, 32]} />
      {mimeType.startsWith("image")
        ? <ThreeImage url={url} />
        : <Video url={url} />}
    </mesh>
  );
};

export default Asset;
