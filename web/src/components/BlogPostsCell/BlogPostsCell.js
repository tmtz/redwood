// import { Link } from '@redwoodjs/router'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  // return JSON.stringify(posts)
  return (
    <ul>
      {posts.map((posts) => (
        <li key={posts.id}>
          <h2>{posts.title}</h2>
          <p>{posts.body}</p>
          <p>Create at {posts.createdAt}</p>
        </li>
      ))}
    </ul>
  )
}
