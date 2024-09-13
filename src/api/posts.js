const API_URL = process.env.REACT_APP_API_URL;

export async function getPosts() {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function addPost(post) {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding post:", error);
    return null;
  }
}
