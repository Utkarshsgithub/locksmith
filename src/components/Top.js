import React from "react";
import ResTop from "./ResTop";

export default function Top({ setProgress }) {
  setProgress(20);
  let windowWidth = window.innerWidth;
  if (windowWidth>900) {
  return (
      <div id="top">
        <div id="top-card">
          <h1>Best Locksmith In Florida</h1>
          <p>
            We are the most popular locksmith in Florida, We are most
            affordable, we provide all sorts of locksmith services, we are
            available 24/7, we provide best locksmith services, we are Viking
            Locksmith!
          </p>
          <button className="btn trans2s">Let's Talk</button>
        </div>
        {() => setProgress(60)}
      </div>
  );
} else {
    return (
    <ResTop />
    )
}
}