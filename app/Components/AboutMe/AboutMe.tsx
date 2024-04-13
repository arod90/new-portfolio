'use client';
import React from 'react';
import Image from 'next/image';
import { FollowerPointerCard } from '../PointerFollow/PointerFollow';
import './AboutMe.css';

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);

export const AboutMe = () => {
  return (
    <div className="grid md:grid-cols-2 mt-6 h-full md:h-4/5 max-w-7xl mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={'Cotopaxi national park, Ecuador'}
            avatar="/coto.jpg"
          />
        }
      >
        <div className="md:col-span-1 h-64 md:h-full w-11/12 mx-auto">
          <div className="h-full bg-zinc-900 md:full rounded-xl bg-cover bg-center md:bg-cover md:bg-center">
            <img
              src={'/arod.jpg'}
              alt="image of andres with cotopaxi volcano in background"
              className="rounded-xl"
            />
          </div>
        </div>
      </FollowerPointerCard>
      <div className="md:col-span-1 space-y-4 w-11/12 md:h-full md:flex md:flex-col">
        <div className="bg-zinc-900 flex-1 w-full md:h-1/2 rounded-xl p-4 md:p-6">
          <p className="text-3xl sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            About me
          </p>

          <p className="text-base md:text-base text-neutral-600 dark:text-neutral-400">
            Full-stack Developer currently based in Quito, Ecuador. I&apos;ve
            had the wonderful chance to live, work, and study in places like
            Mexico, China, Spain and the United States. I am passionate about
            creating great user Interfaces, and have a knack for problem
            solving. Outside of work I&apos;m a huge fan of competitive
            paintball, E-sports, Music, and the great outdoors. Looking to help
            people establish a great online presence through unique web
            experiences.
          </p>
        </div>
        <div className="bg-zinc-900 flex-1 md:h-1/2 rounded-xl p-4 md:p-6">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Latest roles
          </p>

          <div className="flex">
            <img
              src={'/cw.jpg'}
              alt="codeworks logo"
              className="rounded-lg mr-3 w-20 h-auto"
            />
            <div>
              <p>Codeworks</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Full stack developer &amp; Instructor
              </p>
            </div>
          </div>
          <div className="flex mt-4">
            <img
              src={'/mind.jpg'}
              alt="codeworks logo"
              className="rounded-lg mr-3 w-20 h-auto"
            />
            <div>
              <p>Mind Consumer Neuroscience Advisors</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Project Director
              </p>
            </div>
          </div>
          <a
            href="/cv.pdf"
            download
            className="flex justify-center items-center md:mt-2"
          >
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
