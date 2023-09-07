import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function index(id) {
  return sendRequest(`${BASE_URL}/index`,id);
}
export function showpost(id) {
  return sendRequest(`${BASE_URL}/showpost`,id);
}
export function editPost(data) {
  // Changing data on the server, so make it a POST request
  return sendRequest.sendPostRequest(`${BASE_URL}/editPost`, data);
}

// Return all posts for the logged in user
export function showAll() {
  return sendRequest.sendGetRequest(`${BASE_URL}/showAll`);
}
// Delete Post
export function deletePosts() {
  return sendRequest.sendPostRequest(`${BASE_URL}/deletePosts`);
}

// Upload Post
export function createPost() {
  return sendRequest.sendPostRequest(`${BASE_URL}/createPost`);
}