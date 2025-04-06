import bgVideo from '../assets/videos/nft-video.mp4'; // adjust the path

export default function VideoCard() {
  return (
    <div className="w-full h-auto rounded-lg overflow-hidden">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}