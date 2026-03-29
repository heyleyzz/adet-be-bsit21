import pool from '../config/db.js';

// GET ALL
export const getAllPosts = async () => {
  const [rows] = await pool.query('SELECT * FROM posts');
  return rows;
};

// GET ONE
export const getPostById = async (id: number) => {
  const [rows]: any = await pool.query(
    'SELECT * FROM posts WHERE post_id = ?',
    [id]
  );
  return rows[0];
};

// CREATE
export const createPost = async (title: string, description: string) => {
  const [result]: any = await pool.query(
    'INSERT INTO posts (title, description) VALUES (?, ?)',
    [title, description]
  );
  return result.insertId;
};

// UPDATE
export const updatePost = async (id: number, title: string, description: string) => {
  await pool.query(
    'UPDATE posts SET title=?, description=? WHERE post_id=?',
    [title, description, id]
  );
};

// DELETE
export const deletePost = async (id: number) => {
  await pool.query(
    'DELETE FROM posts WHERE post_id=?',
    [id]
  );
};