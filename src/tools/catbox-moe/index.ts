import { Photo } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Catbox.moe',
  path: '/catbox-moe',
  description: 'Catbox.moe is a free image hosting service that allows you to upload images and share them with others.',
  keywords: ['picture', 'image', 'upload', 'catbox', 'image hosting', 'image upload', 'image share'],
  component: () => import('./catbox-moe.vue'),
  icon: Photo,
  createdAt: new Date('2025-03-08'),
});
