import React from "react";

function TutorialCard({ image, title, description, author, rating }) {
  return (
    <div className="tutorial-card">

      <img
        src={image}
        alt={title}
        className="tutorial-image"
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

export default TutorialCard;