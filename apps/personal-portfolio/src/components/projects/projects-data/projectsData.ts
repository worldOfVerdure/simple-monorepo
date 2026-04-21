//images
import animatedD3JSImg from '@/assets/project-thumbnail/animated-d3js.webp';
import matchGameImg from '@/assets/project-thumbnail/match-game.webp';
import simpleTemplateImg from '@/assets/project-thumbnail/simple-template.webp';

//types
import type { StaticImageData } from 'next/image';

export type ProjectCardProps = {
  projectTitle: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  imgHeight: number;
  imgWidth: number;
  liveProject: `https://${string}`;
  github: `https://${string}`;
  description: string;
  isEven?: boolean;
};

export const projectsData: ProjectCardProps[] = [
  {
    projectTitle: 'Simple Monorepo Demo',
    imgSrc: simpleTemplateImg,
    imgAlt: 'A thumbnail of the Simple Template project.',
    imgHeight: 4023,
    imgWidth: 7152,
    liveProject: 'https://simple-monorepo-gamma.vercel.app/',
    github: 'https://github.com/worldOfVerdure/simple-monorepo/tree/main/apps/simple-demo',
    description: 'A demo starting point for a monorepo with Turborepo, React, Next.js and TypeScript.'
  },
  {
    projectTitle: 'Animated D3.js Graph',
    imgSrc: animatedD3JSImg,
    imgAlt: 'A thumbnail of the Animated D3.js Graph project.',
    imgHeight: 3859,
    imgWidth: 6860,
    liveProject: 'https://animated-graph-simulation-d3.vercel.app/',
    github: 'https://github.com/worldOfVerdure/animatedGraphSimulationD3',
    description: 'Built with D3.js and the HTML canvas to animate nodes and edges moving in space.'
  },
  {
    projectTitle: 'Match Game',
    imgSrc: matchGameImg,
    imgAlt: 'A thumbnail of the Match Game project.',
    imgHeight: 4290,
    imgWidth: 7627,
    liveProject: 'https://worldofverdure.github.io/GameNMatch/',
    github: 'https://github.com/worldOfVerdure/GameNMatch',
    description: 'A responsive matching card game built with HTML, CSS and JavaScript.'
  }
];
