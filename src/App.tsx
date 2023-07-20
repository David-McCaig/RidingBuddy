import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    <h1 className= " text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className='w-16 h-16 bg-slate-100' >

    </div>
    </>
  )
}

export default App;

