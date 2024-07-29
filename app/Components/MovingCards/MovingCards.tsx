'use client';

import { cn } from '@/utils/cn';
import React, { useEffect, useState, useRef } from 'react';
import { useDrag } from '@use-gesture/react';

export const MovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    name: string;
    name2: string;
    name3: string;
    icon?: JSX.Element;
    icon2?: JSX.Element;
    icon3?: JSX.Element;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  const bind = useDrag(
    ({ down, movement: [mx], cancel }) => {
      if (down && !isDragging) {
        setIsDragging(true);
      } else if (!down && isDragging) {
        setIsDragging(false);
        setDragX(0);
      }

      if (isDragging) {
        setDragX(mx);
      }
    },
    { filterTaps: true, threshold: 5 }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
      {...bind()}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && !isDragging && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{
          transform: `translateX(${dragX}px)`,
          transition: isDragging ? 'none' : 'transform 0.5s ease-out',
        }}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-10 md:w-[450px]"
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={item.id}
          >
            <blockquote>
              <div className="flex items-center justify-around">
                <span className="flex flex-col items-center justify-center text-sm text-gray-400 font-normal">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                <span className="flex flex-col items-center justify-center text-sm text-gray-400 font-normal">
                  <span>{item.icon2}</span>
                  <span>{item.name2}</span>
                </span>
                <span className="flex flex-col items-center justify-center text-sm text-gray-400 font-normal">
                  <span>{item.icon3}</span>
                  <span>{item.name3}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
