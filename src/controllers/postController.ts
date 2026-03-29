import type { Context } from 'hono';
import * as Post from '../models/postModel.js';

// GET ALL
export const getPosts = async (c: Context) => {
  const posts = await Post.getAllPosts();
  return c.json(posts);
};

// GET ONE
export const getPost = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const post = await Post.getPostById(id);

  if (!post) {
    return c.json({ message: 'Post not found' }, 404);
  }

  return c.json(post);
};

// CREATE
export const createPost = async (c: Context) => {
  const body = await c.req.json();

  if (!body.title) {
    return c.json({ message: 'Title is required' }, 400);
  }

  const id = await Post.createPost(body.title, body.description);
  return c.json({ message: 'Post created', id });
};

// UPDATE
export const updatePost = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const body = await c.req.json();

  await Post.updatePost(id, body.title, body.description);
  return c.json({ message: 'Post updated' });
};

// DELETE
export const deletePost = async (c: Context) => {
  const id = Number(c.req.param('id'));

  await Post.deletePost(id);
  return c.json({ message: 'Post deleted' });
};