import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface TimelineItem {
  url: string;
  description: string;
  content: string;
}

interface FooterDashboardProps {
  items: TimelineItem[];
}

export default function FooterDashboard({ items }: FooterDashboardProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up", "opacity-100");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".timeline-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative mx-auto w-full px-4 py-8">
      <div className="relative">
        {/* Brown background line */}
        <div className="bg-brown-500 absolute left-1/2 h-full w-[2px] -translate-x-1/2" />

        {/* Pink progress line */}
        <div
          className="absolute left-1/2 w-[2px] -translate-x-1/2 bg-pink-400 transition-all duration-300"
          style={{ height: `${progress}%` }}
        />

        {/* Timeline items */}
        <div className="relative space-y-32">
          {items.map((item, index) => (
            <div
              key={index}
              className="timeline-item relative flex translate-y-16 items-center opacity-0 transition-all duration-700"
            >
              {index % 2 === 0 ? (
                // Left side item
                <>
                  <div className="w-[45%] rounded-xl bg-gray-50 p-8 shadow-lg">
                    <div className="group relative mb-8">
                      <Image
                        src={item.url}
                        alt={item.description}
                        loading="eager"
                        width={1920}
                        height={1080}
                        className="aspect-auto w-full rounded-lg object-cover"
                      />
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="p-6 text-center text-white">
                          <h3 className="mb-4 text-2xl font-semibold">
                            {item.description}
                          </h3>
                          <p className="translate-y-4 transform text-lg transition-transform duration-300 group-hover:translate-y-0">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[10%]" />
                  {/* Right content card */}
                  <div className="w-[45%] rounded-xl bg-gray-50 p-8 shadow-lg">
                    <h3 className="mb-4 text-2xl font-semibold">
                      {item.description}
                    </h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </>
              ) : (
                // Right side item
                <>
                  {/* Left content card */}
                  <div className="w-[45%] rounded-xl bg-gray-50 p-8 shadow-lg">
                    <h3 className="mb-4 text-2xl font-semibold">
                      {item.description}
                    </h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                  <div className="w-[10%]" />
                  <div className="w-[45%] rounded-xl bg-gray-50 p-8 shadow-lg">
                    <div className="group relative mb-8">
                      <Image
                        src={item.url}
                        alt={item.description}
                        loading="eager"
                        width={1920}
                        height={1080}
                        className="aspect-auto w-full rounded-lg object-cover"
                      />
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="p-6 text-center text-white">
                          <h3 className="mb-4 text-2xl font-semibold">
                            {item.description}
                          </h3>
                          <p className="translate-y-4 transform text-lg transition-transform duration-300 group-hover:translate-y-0">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
