import React, { useState } from "react";

function NewPost({ goTo }) {
  const [postType, setPostType] = useState("question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const tagList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!title.trim()) {
      setMessage("Please enter a title.");
      return;
    }

    if (!description.trim()) {
      setMessage(
        postType === "question"
          ? "Please describe your question."
          : "Please describe your article."
      );
      return;
    }

    if (tagList.length === 0) {
      setMessage("Please add at least one tag.");
      return;
    }

    if (tagList.length > 3) {
      setMessage("Please add no more than 3 tags.");
      return;
    }

    setMessage("Post created successfully!");
  };

  return (
    <main className="new-post-page">
      <section className="new-post-section">
        <h1>New Post</h1>
        <p>Share your question or article with the DEV@Deakin community.</p>

        <form className="new-post-card" onSubmit={handleSubmit}>
          <div className="post-type-section">
            <label className="section-label">Select Post Type</label>
            <div className="post-type-options">
              <label>
                <input
                  type="radio"
                  name="postType"
                  value="question"
                  checked={postType === "question"}
                  onChange={() => setPostType("question")}
                />
                Question
              </label>

              <label>
                <input
                  type="radio"
                  name="postType"
                  value="article"
                  checked={postType === "article"}
                  onChange={() => setPostType("article")}
                />
                Article
              </label>
            </div>
          </div>

          <div className="post-info-box">
            <h2>
              {postType === "question"
                ? "What do you want to ask or share?"
                : "What do you want to share?"}
            </h2>
            <p>
              {postType === "question"
                ? "This section is designed for questions and problems that you would like the DEV@Deakin community to help you solve."
                : "This section is designed for articles and ideas that you would like to share with the DEV@Deakin community."}
            </p>
          </div>

          <div className="post-field">
            <label htmlFor="post-title">Title</label>
            <input
              id="post-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a descriptive title"
            />
            {!title.trim() && <small>Please enter a title.</small>}
          </div>

          <div className="post-field">
            <label htmlFor="post-description">
              {postType === "question" ? "Describe your problem" : "Describe your article"}
            </label>
            <textarea
              id="post-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={
                postType === "question"
                  ? "Explain your question or problem..."
                  : "Explain your article or idea..."
              }
              rows="6"
            />
            {!description.trim() && (
              <small>
                {postType === "question"
                  ? "Please describe your question."
                  : "Please describe your article."}
              </small>
            )}
          </div>

          <div className="post-field">
            <label htmlFor="post-tags">Tags</label>
            <input
              id="post-tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Please add up to 3 tags to describe your post"
            />
            <small>Example: React, JavaScript, Firebase</small>
            <small>Please add at least one tag.</small>
          </div>

          {message && <p className="post-message">{message}</p>}

          <div className="post-actions">
            <button type="submit" className="post-button">Post</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default NewPost;
