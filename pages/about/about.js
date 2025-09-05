import "./about.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="about">
  <h1 class = "hashtag"> Sobre mí</h1>
  <div class="presentation">
    <div class="paragraph-separation">
      <p> Me llamo Miguel López-Herrero. Tengo 23 años y vivo en Málaga, España. En 2023, tomé la decisión de cambiar de profesión para dedicarme al mundo de la programación. Desde entonces, estoy totalmente comprometido en mi camino para ejercer como desarrollador web full stack.</p>
      <p> Los lenguajes que más domino son JavaScript, HTML5 y CSS3 aunque también he trabajado con React, Node y MongoDB. En este tiempo he podido aplicar mis conocimientos en proyectos personales y grupales, los cuales me han permitido mejorar mis habilidades técnicas y aprender a trabajar en equipo.</p>
      <p> Soy una persona curiosa y me encanta estar constantemente aprendiendo. Me apasiona asuminr nuevos retos y crecer  tanto a nivel profesional como personal. </p>   
    </div>
    <img src="/img/Foto-cara.jpg" alt="Foto de perfil" />
  </div>
  <div class="container-title">
    <h2 class="downBar hashtag">Lenguajes</h2>
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
      <!-- <div class="languages-card">
         <img src="/svg/express.svg" alt="Logo Express" />
         <p> ExpressJS </p>
      </div> -->
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
    <h2 class="downBar hashtag"> Educación </h2>
    <p class="downBar"></p>
  </div>
  <ul class="education">
    <li class="list-item">
      <span class="bullet"><strong> Técnico Superior en Desarrollo de Aplicaciones Web </strong> • September 2024 - Actualidad</span>
      <p class="bullet"> ThePower Academy </p>
    </li>
    <li class="list-item">
      <span class="bullet"><strong> Máster Full Stack Web </strong> • June 2024 - Actualidad</span>
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
    <h2 class="downBar hashtag"> Idiomas </h2>
    <p class="downBar"></p>
  </div>
  <ul class="tongues">
    <li class="tongues-list">
      <span class="bullet-2"><strong class="tongue">Español</strong> 
      </span>
      <p>🇪🇸 (lengua materna)</p>
    </li>
    <li class="tongues-list">
      <span class="bullet-2"><strong class="tongue">Inglés</strong> 
      </span>
      <p>🇬🇧 (profesional)</p>
    </li>
  </ul>
  <div class="container-title">
    <h2 class="downBar hashtag"> Aficiones    </h2>
    <p class="downBar"></p>
  </div>
  <section class="hobbies-section">
    <p>En mi tiempo libre disfruto <strong>desarrollando</strong> nuevos proyectos, como este sitio web, con el objetivo de seguir ampliando mis conocimientos y potenciar mi creatividad.</p>
    <p>Uno de mis mayores aficiones es el fitness. Empecé a ir al gimnasio en 2020 y, desde entonces, me comprometí a transformar mi físico. Este estilo de vida me ha ayudado a gestionar el estrés y a mantener una vida sana y equilibrada.</p>
    <p>Me gusta <strong>leer </strong> a diario, antes de dormir, sobre actualidad, finanzas o crecimiento personal.</p>
    <p>Me apasiona viajar y descubrir nuevas culturas. Intento viajar dos veces al año y pasar varias semanas explorando diferentes culturas. ¡Salir de mi zona de confort me mantiene vivo!</p>
    <p>Por último y no menos importante, la curiosidad me llevó a conocer Bitcoin y ahora soy un apasionado del mundo <strong>Blockchain</strong>.</p>
  </section>
  </section>
  `;
};
