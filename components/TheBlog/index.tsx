'use client';

import { getAllPosts } from '@/services/getPosts';
import { useEffect, useState } from 'react';
import { PostSearch } from '../PostSearch';
import { Posts } from '../Posts';

const TheBlog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {isLoading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
};

export { TheBlog };
