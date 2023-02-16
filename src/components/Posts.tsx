import { PostList } from '../App'
import { Dispatch } from 'react'
import { ActionState } from '../reducer'
import Post from './Post'

interface Props {
	posts: PostList[]
	dispatch: Dispatch<ActionState>
}

export function PostsList ({ posts, dispatch }: Props) {
	return (
		<div>
			{posts.map(post => <Post post={post} dispatch={dispatch} />)}
		</div>
	)
}