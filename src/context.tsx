import React, { createContext, useContext, useState, useReducer } from "react";
import { initState, reducer, PostState, ActionState } from "./reducer";

type SinglePost = {
  name: string;
  message: string;
}

interface IAuthContext {
  posts: PostState
}
interface IActionContext {
  dispatch: React.Dispatch<ActionState>
}

export const PostsContext = createContext<PostState>({ posts: [] })
export const ActionContext = createContext<React.Dispatch<ActionState>>(() => null)

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  // const [posts, setPosts] = useState<SinglePost[]>([])
  const [posts, dispatch] = useReducer(reducer, initState)


  return (
  <ActionContext.Provider value={dispatch}>
    <PostsContext.Provider value={posts}>
    {children}
    </PostsContext.Provider>
  </ActionContext.Provider>
  )
}

export const usePosts = () => {
  const posts = useContext(PostsContext)
  if (!posts) {
    throw new Error('usePosts must be used within a PostsProvider')
  }
  return posts
}
export const useAction = () => {
  const actions = useContext(ActionContext)
  if (!actions) {
    throw new Error('seAction must be used within a PostsProvider')
  }
  return actions
}