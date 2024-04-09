import { HeroSpot } from './Components/HeroSpot/HeroSpot';
import { TextGenerate } from './Components/TextGenerate/TextGenerate';
import { MovingCards } from './Components/MovingCards/MovingCards';
import { SvgMask } from './Components/SvgMask/SvgMask';
import { BgBeams } from './Components/BgBeams/BgBeams';
import { BgDot } from './Components/BgDot/BgDot';
import { Sparkles } from './Components/Sparkles/Sparkles';
import { NavBar } from './Components/NavBar/NavBar';
import {
  IconHome,
  IconMessage,
  IconUser,
  IconBrandReact,
  IconBrandAngular,
  IconBrandNodejs,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandVscode,
  IconAsterisk,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandRedux,
  IconBrandFirebase,
  IconBrandVercel,
  IconBrandPlanetscale,
  IconBrandGoogle,
  IconBrandMysql,
  IconBrandCypress,
  IconBrandPrisma,
  IconBrandOpenai,
  IconBrandGithub,
  IconBrandTailwind,
  IconBrandGithubCopilot,
} from '@tabler/icons-react';

const Toolkit1 = [
  {
    id: 1,
    icon: (
      <IconBrandReact className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name: 'React',
    icon2: (
      <IconBrandAngular className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name2: 'Angular',
    icon3: (
      <IconBrandNextjs className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name3: 'Next.Js',
  },
  {
    id: 4,
    icon: (
      <IconBrandJavascript className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name: 'Javascript',
    icon2: (
      <IconBrandTypescript className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name2: 'Typescript',
    icon3: (
      <IconBrandNodejs className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name3: 'Node.js',
  },
  {
    id: 2,
    icon: (
      <IconBrandTailwind className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name: 'Tailwind',
    icon2: (
      <IconBrandHtml5 className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name2: 'HTML5',
    icon3: (
      <IconBrandCss3 className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name3: 'CSS3',
  },
  {
    id: 3,
    icon: (
      <IconBrandOpenai className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name: 'OpenAI',
    icon2: (
      <IconBrandGithubCopilot className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name2: 'Copilot',
    icon3: (
      <IconAsterisk className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name3: 'Claude.ai',
  },
];

const Toolkit2 = [
  {
    id: 1,
    icon: (
      <IconBrandMongodb className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name: 'MongoDB',
    icon2: (
      <IconBrandMysql className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name2: 'MySQL',
    icon3: (
      <IconBrandPlanetscale className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name3: 'PlanetScale',
  },
  {
    id: 1,
    icon: (
      <IconBrandPrisma className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name: 'Prisma',
    icon2: (
      <IconBrandCypress className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name2: 'Cypress',
    icon3: (
      <IconBrandFirebase className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name3: 'Firebase',
  },
  {
    id: 1,
    icon: (
      <IconBrandVercel className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name: 'Vercel',
    icon2: (
      <IconBrandGoogle className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name2: 'Google',
    icon3: (
      <IconBrandGithub className="h-10 w-10 text-neutral-500 dark:text-white" />
    ),
    name3: 'Github',
  },
];

const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'About',
    link: '/about',
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function Home() {
  return (
    <>
      <section className="h-screen">
        <NavBar navItems={navItems} />
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <HeroSpot
            className="-top-40 left-0 md:left-60 md:-top-20 "
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mt-40">
            <div className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <span>Andres Rodriguez</span> <br />
              <span className="text-3xl md:text-7xl ">
                I construct the web.
              </span>
            </div>
            <TextGenerate
              words="Software engineer born in Quito, Ecuador,     constantly turning ideas into products."
              className="mt-4 max-w-2xl text-center mx-auto"
            ></TextGenerate>
          </div>
        </div>
        {/* <BgDot /> */}
      </section>
      <section className="h-screen relative flex flex-col justify-items-start">
        <BgBeams />
        <div className="text-4xl md:text-8xl font-bold bg-clip-text text-right text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 md:m-8 md:mb-16 m-4">
          <span>Toolkit</span> <br />
        </div>
        <MovingCards
          className="mb-10"
          items={Toolkit1}
          direction="left"
          speed="slow"
        />
        <MovingCards items={Toolkit2} direction="right" speed="slow" />
      </section>
      <section className="h-screen">
        <SvgMask
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
              The first rule of MRR Club is you do not talk about MRR Club. The
              second rule of MRR Club is you DO NOT talk about MRR Club.
            </p>
          }
          className="h-[40rem] border rounded-md"
        >
          The first rule of <span className="text-red-500">MRR Club</span> is
          you do not talk about MRR Club. The second rule of MRR Club is you DO
          NOT talk about <span className="text-red-500">MRR Club</span>.
        </SvgMask>
      </section>
    </>
  );
}
