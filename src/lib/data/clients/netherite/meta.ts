import type { Client } from '$lib/data/clients';
import avatar from './avatar.png?avatar';
import banner from './banner.png?image';

import NetheritePanelConfig from './assets/netherite-panel-config.png?image';
import NetheritePanelDeployment from './assets/netherite-panel-deployment.png?image';

import PrisonSpawn from './assets/prison-spawn.png?image';
import PrisonDungeon from './assets/prison-dungeon.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Netherite',
  description: 'Highly-scalable, high-throughput Minecraft development, built with Kubernetes & a microservice architecture.',
  href: 'https://netherite.gg',

  avatar,
  banner,

  start: 'Dec 2023',
  // No end date, still working with them

  projects: [
    {
      name: 'Netherite',
      description:
        "The new Netherite network is built on a microservice architecture, with a focus on high-throughput, low-latency, and high-scalability. It's built with Kubernetes and Agones, using GRPC as a communication transport between microservices. Each service is scaled dynamically based on demand, ensuring optimal performance and resource utilization across our machines.",
    },
    {
      name: 'Netherite: Prison',
      description:
        'The Minecraft Prison experience, refined. Built with a scalable world loading system - stored in Amazon S3 - and seamlessly sharded across multiple servers.',
      media: [
        {
          media: PrisonSpawn,
          caption: 'Spawn',
        },
        {
          media: PrisonDungeon,
          caption: 'Dungeons',
        },
      ],
    },
    {
      name: 'Netherite: Panel',
      description:
        "The Netherite Panel is a web-based control panel which manages config, deployments, audit logs, and other features of the Netherite network. It's built with NextJS, TypeScript, Tailwind CSS, GRPC, and various other technologies.",
      media: [
        {
          media: NetheritePanelConfig,
          caption: 'Admin Panel - Config Editor',
        },
        {
          media: NetheritePanelDeployment,
          caption: 'Admin Panel - Deployment',
        },
      ],
    },
  ],
} satisfies Client;
