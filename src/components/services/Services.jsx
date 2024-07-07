import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Aprender para luego
          <br /> enseñar
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            Dev <motion.b whileHover={{ color: "orange" }}>Genexus</motion.b>{" "}
            Ssr
          </h1>
        </div>
        <div className="title">
          <h1>
            desde <motion.b whileHover={{ color: "orange" }}>2018</motion.b>{" "}
          </h1>
          <button>Más tecnologías</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Universidad 👨🏻‍🎓🏛️</h2>
          <p>
            Estudiante universitario de Ingeniería en Sistemas de Información
            UNIVERSIDAD TECNOLOGICA NACIONAL - Argentina Actualmente terminé mi
            estudios y presenté mi proyecto final. Estoy a 8 materias de
            convertirme en Ingeniero!!
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Laboral💼💻</h2>
          <p>
            Desde el 2018 trabajo con la herramienta Genexus en variedad de sus
            versiones. Me certifiqué como analista Senior en la version Gx15.
            Actualmente trabajo con versiones de genexus desde la Evo2 en
            adelante. Manejando a su vez complementos como Wpp y WppMobile
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Norte 🧭🔭</h2>
          <p>
            Mi búsqueda esta basada en conseguir un trabajo en una tecnología no
            Genexus. Me gustaría trabajar como desarrollador fullstack con
            herramientas como Java y Javascript. Utilizando cualquier frameworks
            de las mismas. A lo largo de mi carrera he experimentado con estos
            lenguajes de programación y mi objetivo es seguir haciendolo de
            manera profesional en un trabajo.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
