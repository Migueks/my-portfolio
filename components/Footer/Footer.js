import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/svg/x.svg", "Twitter")}
${Button("/svg/github.svg", "GitHub")}
${Button("/svg/linkedin.svg", "LinkedIn")}
${Button("/svg/whatsapp.svg", "WhatsApp")}
</div>
`;
