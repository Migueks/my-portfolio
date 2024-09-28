import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/home/home";
import { Projects } from "./pages/projects/projects";
import { Divider } from "./components/Divider/Divider";
import { About } from "./pages/about/about";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#aboutlink", About);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());
