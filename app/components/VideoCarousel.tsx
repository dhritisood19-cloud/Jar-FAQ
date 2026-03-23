"use client";

const videos = [
  { id: "rh-e2zW3ivY", title: "How Jar Works" },
  { id: "TR1v71hsWNY", title: "Getting Started with Jar" },
  { id: "2p5tgCAE4EI", title: "Jar Savings Guide" },
];

const wikiVideo = {
  url: "https://wiki.myjar.app/en/video-player/?lang=HI&topic=What%20is%20Jar%20app?%20How%20does%20it%20work?",
  title: "What is Jar app? How does it work?",
};

const allVideos = [...videos, ...videos];

export default function VideoCarousel() {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-5">Help Videos</h2>
      <div className="overflow-hidden rounded-2xl">
        <div className="auto-scroll flex gap-4" style={{ width: "max-content" }}>
          {allVideos.map((video, i) => (
            <div key={`${video.id}-${i}`} className="flex-shrink-0 w-[320px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-gray-800">{video.title}</p>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-[320px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
            <div className="relative aspect-video">
              <iframe src={wikiVideo.url} title={wikiVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-gray-800">{wikiVideo.title}</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-[320px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
            <div className="relative aspect-video">
              <iframe src={wikiVideo.url} title={wikiVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-gray-800">{wikiVideo.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
