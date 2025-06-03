// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Fade-in animation styles
const style = document.createElement("style");
style.innerHTML = `
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
    opacity: 0;
  }
  .delay-300 {
    animation-delay: 0.3s;
  }
  .delay-600 {
    animation-delay: 0.6s;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Mount the app
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
