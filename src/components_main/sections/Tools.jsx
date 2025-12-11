import React from "react";
import styles from "./tools.module.scss";
import images from "../../helpers/imageLoader.";

// --- Data for our carousel ---
// Add or remove images here to change the carousel
const carouselItems = [
  
    { id: 1, name: "linux", src: images["logo/linux.png"], alt: "girl9" },
    { id: 2, name: "Adobe XD", src: images["logo/adobe-xd.png"], alt: "girl11" },
    { id: 3, name: "Figma", src: images["logo/figma.png"], alt: "girl10" },
    { id: 4, name: "Git", src: images["logo/git.png"], alt: "girl8" },
    {
      id: 5,
      name: "Docker",
      src: images["logo/docker.png"],
      alt: "girl12",
    },
    {
      id: 6,
      name: "PostgresSQL",
      src: images["logo/postgressql.png"],
      alt: "girl6",
    },
    { id: 7, name: "MySQL", src: images["logo/mysql.png"], alt: "girl6" },
    { id: 8, name: "MongoDB", src: images["logo/mongodb.png"], alt: "girl6" },
    { id: 9, name: "Express", src: images["logo/express.png"], alt: "girl6" },
    { id: 10, name: "Node.js", src: images["logo/node.png"], alt: "girl5" },
    { id: 11, name: "React", src: images["logo/react.png"], alt: "girl1" },
    { id: 12, name: "CSS", src: images["logo/css.png"], alt: "girl3" },
    { id: 13, name: "HTML", src: images["logo/html.png"], alt: "girl4" },
    { id: 14, name: "Python", src: images["logo/python.png"], alt: "girl14" },
    {
      id: 15,
      name: "Typescript",
      src: images["logo/typescript.png"],
      alt: "girl13",
    },
    {
      id: 16,
      name: "JavaScript",
      src: images["logo/javascript.png"],
      alt: "girl2",
    },
  ];


const Tools = () => {
  // Dynamically get the number of items for our CSS variable
  const itemCount = carouselItems.length;

  return (
    // A wrapper to hold the body background styles from the original CSS
    <div className={styles.sceneContainer}>
      <div className={styles.banner}>
        <div
          className={styles.slider}
          // Set the --quantity CSS variable dynamically
          style={{ "--quantity": itemCount }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              // Set the --position CSS variable for each item
              style={{ "--position": index }}
            >
              <img src={item.src} alt={item.alt} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.content}>
          {/* <h1 data-content="My Tech Stacks">My Tech Stacks</h1> */}
          <div className={styles.author}>
            <h2>
              RAPH <span>WEB</span>
            </h2>
            {/* <p>
                            <b>Web Design</b>
                        </p> */}
            <p>My frequently used Stacks and Tools</p>
          </div>
          <div className={styles.model}></div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
