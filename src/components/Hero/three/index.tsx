import { Box } from "@react-three/flex";
import Asset from "../../Asset/three";
import { useFrame } from "@react-three/fiber";
import { createRef, useMemo } from "react";

const Hero = ({ centered = true, featured, viewport }: any) => {
  const refs = useMemo(() => {
    return featured.map((_: any) => createRef());
  }, [featured]);

  const itemsOnScreen = 3;
  const assetWidth = viewport.width / itemsOnScreen;

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
      {(_, boxHeight) =>
        featured.map(({ id, ...asset }: any, i: number) => {
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
    </Box>
  );
};

export default Hero;
