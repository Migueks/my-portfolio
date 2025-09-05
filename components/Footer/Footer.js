import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contacto</h2>
<div>
${Button("/svg/x.svg", "Twitter", "https://x.com/Miguel60709018")}
${Button("/svg/github.svg", "GitHub", "https://github.com/Migueks")}
${Button(
  "/svg/linkedin.svg",
  "LinkedIn",
  "https://www.linkedin.com/in/miguel-lópez-herrero-lópez"
)}
${Button("/svg/whatsapp.svg", "WhatsApp", "https://wa.me/34640553000")}
</div>
`;
