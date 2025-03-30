import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>My Project</h1>
      <p>This is a brief description of my project. You can download the latest version below.</p>
      <a href="/downloads/my_project.exe" download>
        <button className="download-btn">Download Project</button>
      </a>
    </div>
  );
};

export default Home;
