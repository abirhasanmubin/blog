import {
  getPosts,
  getPost,
  getUser,
  getUsers,
  getPostsByUser
} from '../../utils/api';
import {useReducer, useState} from "react";

export default function Home(props) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  setUser(getUser(props.user_id));
  setUserPosts(getPostsByUser(user.id));
  setPosts(getPosts());
  console.log(user)
  // console.log(userPosts)
  // console.log(posts)
  return (
    <div className={''}>
      <h1>Welcome to blog</h1>
      <h2>User Info</h2>
      {user && (
        <div>
          <h3>{user.username}</h3>
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
        </div>
      )}
    </div>
  )
}