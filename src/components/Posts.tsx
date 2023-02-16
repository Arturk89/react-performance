import { PostList } from '../App'
import { Dispatch } from 'react'
import { ActionState } from '../reducer'
import Post from './Post'
import { usePosts } from '../context'

export function PostsList () {
	const { posts } = usePosts()
	return (
		<div>
			{posts.map(post => <Post post={post} />)}
		</div>
	)
}