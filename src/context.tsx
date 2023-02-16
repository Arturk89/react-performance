import React, { createContext, useContext, useState } from "react";

type SinglePost = {
  name: string;
  message: string;
}

interface IAuthContext {
  posts: SinglePost[]
}

const PostsContext = createContext<IAuthContext>({ posts: [] })

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<SinglePost[]>([])

  //@todo
  return <PostsContext.Provider value={{ posts }}>
   {children}
  </PostsContext.Provider>
}

export const usePosts = () => {
  const posts = useContext(PostsContext)
  if (!posts) {
    throw new Error('usePosts must be used within a PostsProvider')
  }
  return posts
}