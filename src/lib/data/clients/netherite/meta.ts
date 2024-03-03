import type { Client } from '$lib/data/clients';
import avatar from './avatar.png?avatar';
import banner from './banner.png?image';

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
        "The new Netherite network is built on a microservice architecture, with a focus on high-throughput, low-latency, and high-scalability. It's built with Kubernetes, Agones, and a variety of other technologies to ensure the best possible experience for players.",
    },
    {
      name: 'Netherite: Panel',
      description:
        'The Netherite Panel is a web-based control panel which live-updates the configuration of the Netherite network. It is built with SvelteKit, TypeScript, and Tailwind CSS. It uses a backend with GRPC to communicate with the services, and provides audit logs, and a variety of other features.',
    },
  ],
} satisfies Client;
