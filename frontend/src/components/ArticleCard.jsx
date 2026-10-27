import React from "react";

function ArticleCard({ image, title, description, author, rating }) {
  return (
    <div className="article-card">

      <img
        src={image}
        alt={title}
        className="article-image"
      />

      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <b>Author:</b> {author}
      </p>

      <p>
        <b>Rating:</b> ⭐ {rating}
      </p>

    </div>
  );
}

export default ArticleCard;