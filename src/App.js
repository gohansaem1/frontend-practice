import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { getPosts, addPost } from "./api/posts"; // API 함수 import

function App() {
  const [posts, setPosts] = useState([]);

  // 서버에서 게시글 목록 가져오기
  useEffect(() => {
    async function fetchPosts() {
      const data = await getPosts();
      setPosts(data); // API 응답을 posts 상태에 저장
    }
    fetchPosts();
  }, []);

  // 새로운 게시글 추가하기
  const handleAddPost = async (post) => {
    const newPost = await addPost(post);
    if (newPost) {
      setPosts([...posts, newPost]); // API 응답을 posts 상태에 추가
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Bulletin Board</h1>
      <PostForm addPost={handleAddPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
