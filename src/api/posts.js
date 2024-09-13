// src/api/posts.js
export async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function addPost(post) {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
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
