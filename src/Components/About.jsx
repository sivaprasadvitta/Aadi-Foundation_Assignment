/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that .
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Computer Science student at Rajiv Gandhi University of Knowledge and Technologies, passionate about creating innovative and efficient user interfaces. With a strong foundation in web development, I enjoy designing user-friendly platforms and implementing intuitive solutions. My skills include full-stack development, utilizing technologies like React, Node.js, and TailwindCSS, along with a solid understanding of data structures, algorithms, and network security. I have developed various projects, including coding platforms and e-commerce clones, focusing on both functionality and aesthetics";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Structures & Algorithms",
  "JavaScript",
  "HTML & CSS",
  "Web Development",
  "ReactJS",
  "NodeJS",
  "TailwindCSS",
  "SQL",
  "Git & GitHub",
  "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I enjoy building web applications that combine clean design with easy functionality. With my full-stack development skills, I focus on creating solutions that are both practical and accessible, making technology easier for everyone to use.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
