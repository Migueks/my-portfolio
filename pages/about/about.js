import "./about.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="about">
  <h1 class = "hashtag"> About</h1>
  <div class="presentation">
    <div class="paragraph-separation">
      <p> My name is Miguel López-Herrero. I’m 23 years old and based in Málaga, Spain, a city that has become a hub for technology companies. In 2023, I made a bold decision to transition from my career as a fitness freelancer to the dynamic world of programming. Since then, I’ve been fully committed to becoming a <span>Full Stack Web Developer</span>.</p>
      <p> I have developed skills in JavaScript, React, Node.js, and MongoDB, and gained hands-on experience building and maintaining web applications with Empacthy’s development team. This role has enhanced my technical abilities and teamwork skills.</p>
      <p> I am passionate about continuous learning and contributing to impactful projects. I’m proactive, solution-focused, and always ready to take on new challenges and grow.</p>   
    </div>
    <img src="/img/Foto-cara.jpg" alt="Foto de perfil" />
  </div>
  <div class="container-title">
    <h2 class="downBar hashtag"> Tech skills </h2>
    <p class="downBar"></p>
  </div>
  <div class="container">
  <div class="frontEnd">
    <h3>FrontEnd</h3>
    <div class="languages">
      <div class="languages-card">
        <img src="/svg/html.svg" alt="Logo HTML5" />
        <p> HTML5 </p>
      </div>
      <div class="languages-card">
        <img src="/svg/css.svg" alt="Logo CSS3" />
        <p> CSS3 </p>
      </div>
      <div class="languages-card">
        <img src="/svg/javascript.svg" alt="Logo JavaScript" />
        <p> JavaScript </p>
      </div>
      <div class="languages-card">
        <img src="/svg/react.svg" alt="Logo ReactJS" />
        <p> React </p>
      </div>
    </div>
  </div>
  <div class="frontEnd">
    <h3>BackEnd</h3>
    <div class="languages">
      <div class="languages-card">
        <img src="/svg/nodejs.svg" alt="Logo NodeJS" />
        <p> NodeJS </p>
      </div>
      <div class="languages-card">
        <img src="/svg/express.svg" alt="Logo Express" />
        <p> ExpressJS </p>
      </div>
      <div class="languages-card">
        <img src="/svg/mongodb.svg" alt="Logo MongoDB" />
        <p> MongoDB </p>
      </div>
      <div class="languages-card">
        <img src="/svg/mysql.svg" alt="Logo MySQL" />
        <p> MySQL </p>
      </div>
    </div>
  </div>
  </div>
  <div class="container-title">
    <h2 class="downBar hashtag"> Education </h2>
    <p class="downBar"></p>
  </div>
  <ul class="education">
    <li class="list-item">
      <span class="bullet"><strong> Técnico Superior en Desarrollo de Aplicaciones Web </strong> • September 2024 - Current</span>
      <p class="bullet"> ThePower Academy </p>
    </li>
    <li class="list-item">
      <span class="bullet"><strong> Máster Full Stack Web </strong> • June 2024 - Current</span>
      <p class="bullet"> ThePower Academy </p>
    </li>
    <li class="list-item">
      <span class="bullet"><strong> Desarrollo Aplicaciones con tecnología Web </strong> • April 2024 - June 2024</span>
      <p class="bullet"> Academia Integral </p>
    </li>
    <li class="list-item">
      <span class="bullet"><strong>Full Stack Web Developer Bootcamp </strong> • September 2023 - April 2024</span>
      <p class="bullet"> Codespace Academy </p>
    </li>
  </ul>
  <div class="container-title">
    <h2 class="downBar hashtag"> Language Skills </h2>
    <p class="downBar"></p>
  </div>
  <ul class="tongues">
    <li class="tongues-list">
      <span class="bullet-2"><strong class="tongue">Spanish</strong> 
      </span>
      <p>🇪🇸 (mothertongue)</p>
    </li>
    <li class="tongues-list">
      <span class="bullet-2"><strong    class="tongue">English</strong> 
      </span>
      <p>🇬🇧 (fluent)</p>
    </li>
  </ul>
  <div class="container-title">
    <h2 class="downBar hashtag"> Hobbies </h2>
    <p class="downBar"></p>
  </div>
  <section class="hobbies-section">
    <p>In my free time I enjoy <strong>developing</strong> new projects, such as this website, with the aim of continuing to expand my knowledge and enhance my creativity.</p>
    <p>The hobby that currently takes most of my time is <strong>fitness</strong>. I started going to the gym in 2020, and from that moment, I committed to transforming my physique. This lifestyle has helped me manage stress and maintain a healthy and balanced life.</p>
    <p>I like to <strong>read</strong> daily, before going to sleep, about current affairs, finances or personal growth.</p>
    <p>I am passionate about <strong>traveling</strong> and experiencing new cultures. I try to travel twice a year and spend several weeks exploring different cultures. Getting out of my comfort zone allows me to thrive.</p>
  </section>
  </section>
  `;
};
