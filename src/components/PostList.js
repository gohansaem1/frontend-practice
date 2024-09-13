import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Post List</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
