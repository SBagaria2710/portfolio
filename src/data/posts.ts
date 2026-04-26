export type PostStamp = 'DRAFT' | 'WIP' | 'LIVE';

export interface Post {
  readonly slug: string;
  readonly title: string;
  readonly dek: string;
  readonly date: string;
  readonly minutes: number;
  readonly stamp: PostStamp;
}

export const POSTS: readonly Post[] = [
  {
    slug: 'the-cost-of-a-migration',
    title: 'The quiet cost of a migration nobody asked for.',
    dek: 'A thousand orgs, one cutover, and the unglamorous work of removing things.',
    date: 'Apr 2026',
    minutes: 6,
    stamp: 'DRAFT',
  },
  {
    slug: 'what-i-learned-from-ipl',
    title: 'What live cricket taught me about backpressure.',
    dek: 'A hundred million people watching the same six balls. Notes from two years on the live-sports stack.',
    date: 'Mar 2026',
    minutes: 8,
    stamp: 'DRAFT',
  },
  {
    slug: 'on-deleting-things',
    title: 'On deleting things: 34 services, one weekend.',
    dek: 'In which I make a kill list, hold a small ceremony, and find that nothing was using the service we were all afraid to remove.',
    date: 'Feb 2026',
    minutes: 5,
    stamp: 'WIP',
  },
] as const;
