import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewPost from "./components/NewPost";

function App() {
  const getPage = () => {
    const hash = window.location.hash.replace("#", "");
    return ["login", "signup", "newpost"].includes(hash) ? hash : "home";
  };

  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const handleHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goTo = (nextPage) => {
    window.location.hash = nextPage === "home" ? "" : nextPage;
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  if (page === "login") {
    return <Login goTo={goTo} />;
  }

  if (page === "signup") {
    return <Signup goTo={goTo} />;
  }

  if (page === "newpost") {
    return <NewPost goTo={goTo} />;
  }

  return (
    <>
      <Header goTo={goTo} />
      <Banner />
      <About />
      <Projects />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
