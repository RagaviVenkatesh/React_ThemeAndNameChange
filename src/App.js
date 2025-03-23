import React, { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [name, setName] = useState(" ");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <h1>Welcome to Student Dashboard</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />

      <p>Hello, {name ? name : "Student"} 👋</p>

      <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
