import { Markdown } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Npmmirror Cheat Sheet',
  path: '/npmmirror-cheatsheet',
  description: 'Npmmirror Cheat Sheet',
  keywords: ['npmmirror', 'cheatsheet', 'memo'],
  component: () => import('./npmmirror-cheatsheet.vue'),
  icon: Markdown,
  createdAt: new Date('2025-03-08'),
});
