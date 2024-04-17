import React from "react";
import SingleBlogImage from "./../assets/images/blog.avif";
import UserProfile from "./../assets/images/profile.webp";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="container">
        <div className="post-details">
          <div className="content">
            <img src={SingleBlogImage} alt="News Details" />
            <div className="user">
              <img src={UserProfile} height={50} width={50} alt="" />
              <div className="info">
                <span>John Doe</span>
                <p>Posted 2 hours ago</p>
              </div>
              <div className="edit">
                <Link to={"/write?edit=2"}>
                  <FaRegEdit />
                </Link>
                <Link>
                  <MdDelete />
                </Link>
              </div>
            </div>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
              voluptas.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              praesentium quae rem nihil est temporibus ratione doloribus
              laborum autem voluptatum veritatis cum officiis voluptatibus saepe
              fugit, inventore sed perspiciatis sit quidem excepturi tempore
              harum voluptatem sint. Dolorem maxime dolorum laboriosam
              reiciendis, corporis quis sed saepe ipsum officiis eius quia?
              Obcaecati mollitia, facilis inventore nostrum tempora autem culpa
              soluta necessitatibus ratione omnis unde, beatae asperiores
              eligendi fugiat eaque hic quia sapiente harum dolores repudiandae
              voluptate. Explicabo debitis in sunt qui minima voluptatibus quo
              tempora dolorem, distinctio magnam, autem quis ipsa itaque vel eum
              unde quisquam rem aliquid, dolor facere voluptate quidem!
            </p>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Single;
