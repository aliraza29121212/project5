import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, architecto, illo ea velit mollitia sunt distinctio
            explicabo officia esse, perferendis rerum vero error exercitationem
            atque eum ipsa tempore doloremque cum!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
