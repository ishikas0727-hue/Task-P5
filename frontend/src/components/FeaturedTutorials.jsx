import React from "react";
import TutorialCard from "./TutorialCard";

function FeaturedTutorials() {

  const tutorials = [
    {
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
      title: "React Basics",
      description:
        "Learn about components, JSX, props and how React applications are structured.",
      author: "Ishika Sharma",
      rating: "5/5"
    },

    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      title: "HTML Basics",
      description:
        "Learn how to create webpages using basic HTML elements and structure.",
      author: "Ishika Sharma",
      rating: "4.8/5"
    },

    {
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500",
      title: "JavaScript Basics",
      description:
        "Learn variables, functions, arrays and other fundamental JavaScript concepts.",
      author: "Ishika Sharma",
      rating: "4.9/5"
    }
  ];

  return (
    <section id="tutorials" className="new-section">

      <hr />

      <h2>Featured Tutorials</h2>

      <div className="tutorial-container">

        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.title}
            {...tutorial}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedTutorials;