import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const site = {
  name: "Sudhir Kumar Singh",
  role: "AI Engineer",
  email: "sudhirsingh3923@gmail.com",
  location: "Pune, India",
  timezone: "Asia/Kolkata",
};

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/S07singh", label: "GitHub", handle: "S07singh" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sudhir-singh867", label: "LinkedIn", handle: "sudhir-singh867" },
  { icon: FaEnvelope, href: `mailto:${site.email}`, label: "Email", handle: site.email },
];
