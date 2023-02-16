import React, { SetStateAction, useState, Dispatch } from "react"
import { PostList } from '../App'
import { ActionState, Types } from '../reducer'
import { v4 as uuidv4 } from 'uuid';
import { usePosts, useAction } from '../context'

interface Props {
  // add: (obj: PostList) => void
  // add: Dispatch<SetStateAction<PostList[]>>
  // dispatch: Dispatch<ActionState>
}

export function Form() {
  const [post, setPost] = useState<PostList>({ id: '12sdsdd3d', name: '', message: '', priority: 'low' })

  const dispatch = useAction()

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  function getPost () {
    return dispatch({ type: Types.SET_POST, payload: post})
  }

  return (<>
    <input type="text" name="name" value={post.name} onChange={onChange} />
    <input type="text" name="message" value={post.message} onChange={onChange} />
    <button onClick={getPost}>Add</button>
  </>)
}