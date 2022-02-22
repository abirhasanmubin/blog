const data = require('./data.json')

const users = data.users;
const posts = data.posts;

function getUsers() {
  return users;
}
function getPosts() {
  return posts;
}
function getUser(id) {
  return users.find(user => user.id === id);
}
function getPostsByUser(id) {
  return posts.filter(post => post.userId === id);
}
function getPost(id) {
  return posts.find(post => post.id === id);
}

export { getUsers, getPosts, getUser, getPostsByUser, getPost };