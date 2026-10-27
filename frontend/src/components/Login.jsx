import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login({ goTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful!");
      setTimeout(() => goTo("home"), 500);
    } catch (error) {
      if (error.code === "auth/user-not-found" || error.code === "auth/invalid-credential") {
        setMessage("No account found or invalid email or password.");
      } else if (error.code === "auth/wrong-password") {
        setMessage("Invalid email or password.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else if (error.code === "auth/operation-not-allowed") {
        setMessage("Email/Password sign-in is not enabled in Firebase yet.");
      } else {
        setMessage("Login failed. Please try again.");
      }
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>DEV@Deakin</h1>
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p>
          Don't have an account?{" "}
          <button className="auth-link" onClick={() => goTo("signup")}>
            Register
          </button>
        </p>

        <button className="back-link" onClick={() => goTo("home")}>
          ← Back to Home
        </button>
      </div>
    </main>
  );
}

export default Login;
