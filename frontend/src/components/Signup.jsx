import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Signup({ goTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: serverTimestamp()
      });

      setMessage("Registration successful! Your account has been saved.");
      setTimeout(() => goTo("login"), 900);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setMessage("An account with this email already exists.");
      } else if (error.code === "auth/weak-password") {
        setMessage("Password should be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else if (error.code === "auth/operation-not-allowed") {
        setMessage("Email/Password sign-in is not enabled in Firebase yet.");
      } else if (error.code === "permission-denied") {
        setMessage("Registration worked, but Firestore permissions blocked saving the profile.");
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>DEV@Deakin</h1>
        <h2>Registration</h2>

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
            placeholder="Create a password"
            minLength="6"
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            minLength="6"
            required
          />

          <button type="submit">Register</button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p>
          Already have an account?{" "}
          <button className="auth-link" onClick={() => goTo("login")}>
            Login
          </button>
        </p>

        <button className="back-link" onClick={() => goTo("home")}>
          ← Back to Home
        </button>
      </div>
    </main>
  );
}

export default Signup;
