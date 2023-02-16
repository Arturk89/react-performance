import React, { useState, useEffect, useRef, useReducer } from 'react';
import { Form } from './components/Form'
import { PostsList } from './components/Posts';
import './App.css';
import { reducer, initState  } from './reducer';

export type PostList = {
  id: string
  name: string;
  message: string;
  priority: string
}

const postObj = [
  { name: 'Artur', message: 'message...'},
  { name: 'Andrzej', message: 'Some message...'}
] as PostList[]

//1. dodac dodawanie postow najpier tutaj
//2. przetestować init function w useState

function App() {
  // const [posts, setPosts] = useState<PostList[]>(postObj)
  const [posts, dispatch] = useReducer(reducer, initState)

  const ref1 = useRef<any | null>(null)
  const ref2 = useRef<any | null>(null)

  // const add = (post: PostList) => setPosts(p => [...p, post])

  // console.log('test ', add === add);
  
  useEffect(() => {
    // if (!ref1.current && !ref2.current) return
    // console.log('show me ref ', ref1.current);
    // console.log('show ref ', ref2.current)
    
    // console.log('fn() ', ref1.current === add)
    // console.log('set ', ref2.current === setPosts)

    // ref1.current = add
    // ref2.current = setPosts
  })

  return (
    <div className="App">
      <div>
        <Form dispatch={dispatch} />
      </div>
      <PostsList dispatch={dispatch} posts={posts.posts} />
    </div>
  );
}

export default App;
