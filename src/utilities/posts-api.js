import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function index(id) {
  return sendRequest(`${BASE_URL}/index`,id);
}
export function show(id) {
  return sendRequest(`${BASE_URL}/show`,id);
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
export function uploadPost(data) {
  return sendRequest.sendPostRequest(`${BASE_URL}/upload`, data);
}