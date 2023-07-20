import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';
import { ReactNode } from 'react';

interface Post {
  id: string;
  item_name: string;
}

function App(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/product/bikes')
      .then((res: AxiosResponse<Post[]>) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="w-16 h-16 bg-slate-100"></div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <p>{post.item_name}</p>
        </div>
      ))}
    </>
  );
}

export default App;

