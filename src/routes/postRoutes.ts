import { Hono } from 'hono';
import * as controller from '../controllers/postController.js';

const postRoutes = new Hono();

postRoutes.get('/posts', controller.getPosts);
postRoutes.get('/posts/:id', controller.getPost);
postRoutes.post('/posts', controller.createPost);
postRoutes.put('/posts/:id', controller.updatePost);
postRoutes.delete('/posts/:id', controller.deletePost);

export default postRoutes;