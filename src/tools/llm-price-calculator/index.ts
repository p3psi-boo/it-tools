import { Cash } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'LLM price calculator',
  path: '/llm-price-calculator',
  description: 'Calculate the price of an LLM model',
  keywords: ['llm', 'price', 'calculator', 'model', 'price', 'calculator', 'oneapi', 'newapi'],
  component: () => import('./llm-price-calculator.vue'),
  icon: Cash,
  createdAt: new Date('2025-03-18'),
});
