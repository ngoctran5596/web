import { useEffect, useRef } from "react";

interface ImageFlyRandomProps {
  images: string[];
}

export default function ImageFlyRandom({ images }: ImageFlyRandomProps) {
  const columns = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const getColumnImages = (columnIndex: number) => {
    return images.filter((_, index) => index % 4 === columnIndex).slice(0, 5);
  };

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    const activeIntervals = new Array(columns.length).fill(null);

    columns.forEach((column, index) => {
      if (column.current) {
        const scrollSpeed = 1 + index * 0.2;
        const direction = index % 2 === 0 ? 1 : -1;

        const scroll = () => {
          if (column.current) {
            column.current.scrollTop += scrollSpeed * direction;

            if (
              direction > 0 &&
              column.current.scrollTop >=
                column.current.scrollHeight - column.current.clientHeight
            ) {
              column.current.scrollTop = 0;
            } else if (direction < 0 && column.current.scrollTop <= 0) {
              column.current.scrollTop =
                column.current.scrollHeight - column.current.clientHeight;
            }
          }
        };

        const intervalId = setInterval(scroll, 30);
        intervals.push(intervalId);
        activeIntervals[index] = intervalId;

        column.current.addEventListener("mouseenter", () => {
          if (activeIntervals[index]) {
            clearInterval(activeIntervals[index]);
            activeIntervals[index] = null;
          }
        });

        column.current.addEventListener("mouseleave", () => {
          if (!activeIntervals[index]) {
            const newIntervalId = setInterval(scroll, 30);
            intervals.push(newIntervalId);
            activeIntervals[index] = newIntervalId;
          }
        });
      }
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="flex h-[600px] w-full gap-4 pb-[100px]">
      {columns.map((columnRef, index) => (
        <div
          key={index}
          ref={columnRef}
          className="scrollbar-hidden flex flex-1 flex-col gap-4 overflow-hidden"
        >
          {getColumnImages(index).map((imageUrl, imgIndex) => (
            <img
              key={imgIndex}
              src={imageUrl}
              alt={`Column ${index + 1} Image ${imgIndex + 1}`}
              className="h-[200px] w-full rounded-lg object-cover"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
