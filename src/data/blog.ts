export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  category: 'Guides' | 'DevOps' | 'Syntax' | 'Best Practices';
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-use-cron-expression-generator',
    title: 'How to Use Cron Expression Generator: The Complete Guide to Scheduling Jobs with Precision',
    subtitle: 'A step-by-step masterclass on writing, testing, and debugging Unix crontab schedules using visual generator tools.',
    description: 'Learn how to construct, validate, and understand 5-field and 6-field cron expressions with CronGen. Includes real-world recipes, timezone rules, and production pitfalls.',
    author: {
      name: 'CronGen Engineering',
      role: 'DevOps & Systems Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    },
    publishDate: 'October 15, 2026',
    readTime: '14 min read',
    category: 'Guides',
    tags: ['Crontab', 'Cron Expression', 'DevOps', 'Automation', 'Linux', 'AWS', 'Kubernetes'],
    featured: true,
  },
];
