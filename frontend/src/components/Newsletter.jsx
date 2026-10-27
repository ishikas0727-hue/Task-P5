import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Subscription successful!");
        setEmail("");
      } else {
        setMessage(data.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Newsletter request error:", error);
      setMessage("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter" id="subscribe">
      <div className="container newsletter-inner">
        <strong>SIGN UP FOR OUR DAILY INSIDER</strong>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </section>
  );
}

export default Newsletter;
