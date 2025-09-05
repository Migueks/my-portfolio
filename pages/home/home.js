import "./home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, soy:</p>
    <h1>Miguel López-Herrero</h1>
    <p>Soy desarrollador web y vivo en Málaga, España. Me apasiona la tecnología y dedico mi tiempo libre a crear productos digitales, desde sitios webs hasta aplicaciones con utilidad real. Desde mis inicios he compaginado los estudios junto a los proyectos y me ha permitido adquirir tanto experiencia como conocimientos en diversos campos. Ahora estoy dando el salto al mundo profesional para poder exprimir mi máximo potencial y compartirlo con esta gran comunidad.</p>
    <a href="mailto:lhlmiguel@gmail.com">Contáctame →</a>
    </section>`;
};
