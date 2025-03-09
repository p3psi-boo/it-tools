import { Photo } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Squoosh',
  path: '/squoosh-app',
  description: 'Squoosh is a tool for compressing images.',
  keywords: ['picture', 'image', 'compress', 'squoosh', 'image compress', 'image compress tool'],
  component: () => import('./squoosh-app.vue'),
  icon: Photo,
  createdAt: new Date('2025-03-08'),
});
