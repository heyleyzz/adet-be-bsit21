import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import postRoutes from './routes/postRoutes.js';

const app = new Hono();

app.get('/', (c) => {
  return c.text('API is running...');
});

// ROUTES
app.route('/api', postRoutes);

console.log('Server running on http://localhost:3000');

serve({
  fetch: app.fetch,
  port: 3000,
});