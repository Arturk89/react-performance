import { ActionState, Types } from "../reducer"
import { Dispatch, memo } from 'react'
import { PostList } from "../App"

type Props = {
  post: PostList
  dispatch: Dispatch<ActionState>
}
function Post ({ post, dispatch }: Props) {
  return (
    <div key={post.id}>
      <p>name: {post.name}</p>
      <p>post: {post.message}</p>
      <p>priority: {post.priority}</p>
      <button
        onClick={() => dispatch({ type: Types.TOGGLE, payload: post.id })}
      >toggle</button>
    </div>
  )
}

export default memo(Post)