import { Speedboat } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Speedtest USTC',
  path: '/speedtest-ustc',
  description: 'Speedtest USTC is a tool for testing the speed of your internet connection.',
  keywords: ['speedtest', 'ustc', 'speed', 'test', 'internet', 'connection', 'speedtest tool'],
  component: () => import('./speedtest-ustc.vue'),
  icon: Speedboat,
  createdAt: new Date('2025-03-08'),
});
