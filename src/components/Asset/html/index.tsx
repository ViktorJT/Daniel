import dynamic from "next/dynamic";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });

const Asset = ({ mimeType, url, width, height }) => {
  if (mimeType.startsWith("image")) {
    return <Image src={url} width={width} height={height} />;
  }
  if (mimeType.startsWith("video")) {
    return (
      <ReactPlayer src={url} width={width} height={height} />
    );
  }
  console.error(`Unsupported mimeType: ${mimeType}`)
  return <></>;
};

export default Asset;
