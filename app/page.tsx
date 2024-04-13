import { HeroSpot } from './Components/HeroSpot/HeroSpot';
import { TextGenerate } from './Components/TextGenerate/TextGenerate';
import { MovingCards } from './Components/MovingCards/MovingCards';
import { SvgMask } from './Components/SvgMask/SvgMask';
import { BgBeams } from './Components/BgBeams/BgBeams';
import { BgDot } from './Components/BgDot/BgDot';
import { Sparkles } from './Components/Sparkles/Sparkles';
import { BgBoxes } from './Components/BgBoxes/BgBoxes';
import { NavBar } from './Components/NavBar/NavBar';
import { ContactForm } from './Components/ContactForm/ContactForm';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { cn } from '@/utils/cn';
import Image from 'next/image';
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    link: '#home',
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'About',
    link: '#about',
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'Toolkit',
    link: '#toolkit',
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const content = [
  {
    title: 'Collaborative Editing',
    description:
      'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: 'Running out of content',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="h-screen">
        <NavBar navItems={navItems} />
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.03] relative overflow-hidden">
          <HeroSpot
            className="-top-40 left-0 md:left-60 md:-top-20 "
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mt-40">
            <div className="text-6xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <span>Andres Rodriguez</span> <br />
              <span className="text-4xl md:text-7xl ">
                I construct the web.
              </span>
            </div>
            <TextGenerate
              words="Software engineer born in Quito, Ecuador,     constantly turning ideas into projects."
              className="mt-4 max-w-2xl text-center mx-auto"
            ></TextGenerate>
          </div>
        </div>
      </section>
      <section id="about" className="h-screen md:pt-20">
        <AboutMe />
      </section>
      <section
        id="toolkit"
        className="h-screen relative flex flex-col justify-center md:justify-items-start"
      >
        <BgBeams />
        <div className="text-6xl md:text-8xl font-bold bg-clip-text text-left text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 md:m-8 md:mb-16 m-4">
          <span>Toolkit</span> <br />
          <p className="text-zinc-400 text-lg md:text-2xl font-medium md:ml-6 mt-4">
            My technical arsenal includes:
          </p>
        </div>
        <MovingCards
          className="mb-10"
          items={Toolkit1}
          direction="left"
          speed="slow"
        />
        <MovingCards items={Toolkit2} direction="right" speed="slow" />
      </section>
      <section id="contact" className="h-screen relative">
        <div className=" p-4 h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <BgBoxes />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
