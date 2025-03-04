import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import { Div } from "../Common/Index";

type InfiniteMovingCardsProps = {
  items: {
    id: number;
    name: string;
    icon: React.ElementType; // Assuming 'IconType' is React.ElementType
    color: string;
  }[]; 
  direction?: string; // Optional
  speed?: string; // Optional
  pauseOnHover?: boolean; // Optional
  className?: string; // Optional
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null); 
  const scrollerRef = React.useRef<HTMLUListElement | null>(null);

  console.log(items);


  const [start, setStart] = useState(false);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
  
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
  
      // Direction setup
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
  
      // Speed setup
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
  
      setStart(true);
    }
  }, [direction, speed]);
  

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
 
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center justify-center w-[100px] md:w-[150px] p-4 bg-gray-800 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              borderColor: item.color,
              background: `linear-gradient(145deg, ${item.color}33, ${item.color}11)` ,
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full"
              style={{
                backgroundColor: `${item.color}22`,
                boxShadow: `0 4px 10px ${item.color}55`,
              }}
            >
              <item.icon className="text-2xl md:text-3xl" style={{ color: item.color }} />
            </div>
            <p className="mt-3 text-sm md:text-base font-medium text-center text-white">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
