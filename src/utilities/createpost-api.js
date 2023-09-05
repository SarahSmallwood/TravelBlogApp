import sendRequest from './send-request';

  const BASE_URL = '/api/posts';

  // Retrieve an unpaid order for the logged in user
  export function getPost() {
    return sendRequest(`${BASE_URL}/blog`);
  }

  // Add an item to the cart
  export function viewNewPost(postId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/blog/posts/${postId}`, 'POST');
  }

  // Update the item's qty in the cart
  // Will add the item to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
  export function addnewPost(postId, newQty) {
    return sendRequest(`${BASE_URL}/blog/qty`, 'PUT', { postId, newQty });
  }

  // Updates the order's (cart's) isPaid property to true
  export function publishPost() {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/blog/new`, 'POST');
  }

  // Return all paid orders for the logged in user
  export function getAllPosts() {
    return sendRequest(`${BASE_URL}/history`);
  }
  // Delete Post
  export function deletePosts() {
    return sendRequest(`${BASE_URL}/delete`, 'Delete');
  }