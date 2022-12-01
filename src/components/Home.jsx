import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
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
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem
            praesentium fuga corrupti vero natus enim voluptas beatae, cumque
            mollitia dicta veritatis perspiciatis cum totam suscipit quis
            incidunt modi iure? ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat rem praesentium fuga corrupti vero natus enim voluptas
            beatae, cumque mollitia dicta veritatis perspiciatis cum totam
            suscipit quis incidunt modi iure praesentium fuga corrupti vero
            natus enim voluptas beatae, cumque mollitia dicta veritatis
            perspiciatis cum totam suscipit quis incidunt modi iure? ipsum dolor
            sit amet consectetur adipisicing elit. Quaerat rem praesentium
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
