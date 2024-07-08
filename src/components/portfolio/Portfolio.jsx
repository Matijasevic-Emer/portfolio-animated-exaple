import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React eCommerce",
    img: "https://www.pexels.com/photo/person-using-black-and-white-smartphone-and-holding-blue-card-230544/",
    desc: "Se trata de mis primeras practicas con React.js - Consiste en un ecommerce de lotes de terrenos en un barrio residencial llamado Mandalas de agua, El proyecto no está finalizado y solo se refiere al front-end del sitio.",
    link: "https://mandalasdeagua.netlify.app/",
  },
  {
    id: 2,
    title: "Editor Automata",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Desarrollado con vanilla JS , el proyecto me fue util para practicar mis conocimientos en Css y Html - Consiste en un lienzo en el cual se pueden desplegar puntos y unir los mismo con flechas. luego al agregar entradas y salidas a las flechas y nombres a los puntos se tiene un grafico de grafos para representar automatas de estados finitos. El proyecto quedó en estado incompleto porque decidí comenzar de nuevo utilizando algun framework de JS",
    link: "https://ematijasevic-aef.netlify.app/",
  },
  {
    id: 3,
    title: "Página de presentación",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Fue la primera practica real que hice con JS , el proyecto consistía en un portafolio virtual - El mismo actualmente fue reemplazado por el sitio actual en cuestión",
    link: "https://emersonmatijasevic.netlify.app/",
  },
  {
    id: 4,
    title: "Listado de Certificaciones",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "El proyecto nació para practicar el consumo de APIs mediante Js y poder hacer uso de los endpoints que tenia desplegado. El mismo lista mediante una api todas las certificaciones de los cursos de programación que tomé a lo largo de mi carrera. El proyecto está terminado y realizo mantenimiento al mismo cada que sea necesario. Utilicé JS Css y Html debido a la sencillez del mismo.",
    link: "https://ematijasevic-certificados.netlify.app/",
  },
  {
    id: 5,
    title: "Ejemplo de Formulario",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Ejemplo de formulario web con vanilla js . Trabajo relaizado como tarea de entrega del curso de programación fullstack en CILSA año 2024",
    link: "https://cilsa-ematijasevic-ejercicio1.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Ver Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Mis proyectos no Genexus</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
