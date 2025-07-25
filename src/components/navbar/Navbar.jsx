import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Matijasevic-Emer"
          >
            <img src="/github.png" alt="repos" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/emerson-matijasevic/"
          >
            <img src="/linkedin.png" alt="laboral" />
          </a>
          <a href="/emerson_matijasevic.pdf" download>
            <img src="/pdf.png" alt="CV PDF" title="Descargar CV" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
