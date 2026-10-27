import React from "react";
import ArticleCard from "./ArticleCard";

function FeaturedArticles() {

  const articles = [
    {
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
      title: "Getting Started with React",
      description:
        "Learn the basics of React components and how to create a simple React website.",
      author: "Ishika Sharma",
      rating: "5/5"
    },

    {
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500",
      title: "Introduction to JavaScript",
      description:
        "A beginner-friendly introduction to JavaScript and its role in modern web development.",
      author: "Ishika Sharma",
      rating: "4.8/5"
    },

    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      title: "Understanding Web Development",
      description:
        "Learn how HTML, CSS, JavaScript and React work together to create websites.",
      author: "Ishika Sharma",
      rating: "4.9/5"
    }
  ];

  return (
    <section id="articles" className="new-section">

      <hr />

      <h2>Featured Articles</h2>

      <div className="article-container">

        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            {...article}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedArticles;