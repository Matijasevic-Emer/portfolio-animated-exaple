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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
