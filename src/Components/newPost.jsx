import React, { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState();
  const [username, setUsername] = useState();
  const [content, setContent] = useState();
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (title === "" || username === "" || content === "") {
      alert("Please fill the data before posting");
      return;
    }
    fetch("https://blog.mytestingemail1122.workers.dev/api/postit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postTitle: title,
        postUsername: username,
        postContent: content,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container my-3">
      <h1 className="text-center">Add New Post</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="post_title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="post_title"
            placeholder="Enter the title of post"
            name="title"
            onChange={titleHandler}
          />
        </div>
        <div className="mb-3">
          <label for="post_username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="post_username"
            placeholder="Enter username"
            name="username"
            onChange={usernameHandler}
          />
        </div>
        <div className="mb-3">
          <label for="post_content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="post_content"
            placeholder="Enter content here...!!"
            name="content"
            rows="10"
            onChange={contentHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
