import { TheBlog } from '@/components/TheBlog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default function Blog() {
  return <TheBlog />;
}
