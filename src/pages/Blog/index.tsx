import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BlogArticle } from './BlogArticle';

export default function Blog(): JSX.Element {
  const { article } = useParams();

  useEffect(() => {
    // console.log('article', article);
  }, [article]);

  return (
    <div>
      Blog
      <BlogArticle />
    </div>
  );
}
