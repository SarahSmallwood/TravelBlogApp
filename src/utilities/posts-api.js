import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
export function editPost() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/blog/edit`, 'POST');
}

// Return all paid orders for the logged in user
export function showAll() {
  return sendRequest(`${BASE_URL}`);
}
// Delete Post
export function deletePosts() {
  return sendRequest(`${BASE_URL}/delete`, 'Delete');
}