interface SinglePost {
  id: string
  name: string;
  message: string;
  priority: string;
}

export enum Types {
  INITIAL_POSTS = 'INITIAL_POSTS',
  SET_POST = 'SET_POST',
  UPDATE_POST = 'UPDATE_POST',
  DELETE_POST = 'DELETE_POST',
  TOGGLE = 'TOGGLE'
}

export interface PostState {
  posts: SinglePost[]
}

export const initState = {
  posts: []
}

export type ActionState = 
  | { type: Types.INITIAL_POSTS, payload: SinglePost[] }
  | { type: Types.SET_POST, payload: SinglePost }
  | { type: Types.UPDATE_POST, payload: SinglePost }
  | { type: Types.DELETE_POST, payload: SinglePost }
  | { type: Types.TOGGLE, payload: string }

export const reducer = (state: PostState, action: ActionState) => {
  switch(action.type) {
    case(Types.INITIAL_POSTS):
      return { ...state, posts: action.payload }
    case(Types.SET_POST):
      return { ...state, posts: [ ...state.posts, action.payload ]}
    case(Types.UPDATE_POST): {
      return state
    }
    case(Types.TOGGLE): {
      return { ...state, posts: state.posts.map(el => 
        el.id === action.payload ? { ...el, priority: 'high' } : el )
      }
    }
    case(Types.DELETE_POST):
      return state
    default:
      return state  
  }
}