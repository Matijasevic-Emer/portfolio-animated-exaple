import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 999,
    title: "JAVA ApiRest Facturación",
    img: "https://i.imgur.com/GzW6tZw.png",
    desc: "Se trata de una API Rest con Java Spring Boot - Consiste en el backend un ecommerce genérico con Clientes , Ventas , Productos y demas entidades relevantes - En el link puede ingresar a la documentacion de la API. [ Java + Spring + Spring Boot + Maven ] [Railway]",
    link: "https://api-facturacion-production.up.railway.app/swagger-ui/index.html#",
  },
  {
    id: 1000,
    title: "Trello App",
    img: "https://d33wubrfki0l68.cloudfront.net/66db95be90eba43648bc67e9/screenshot_2024-09-06-23-53-07-0000.webp",
    desc: "Se trata de una app estilo Trello/Jira para la gestión de proyecto. Producto del trabajo integrador final de un curso de desarrollo Fullstack impartido por CILSA [ JavaScript + React + MaterialUI + Vite ] [Node.js + Express + MySql + Netlify]",
    link: "https://task-ban.netlify.app/",
  },
  {
    id: 1001,
    title: "React eCommerce",
    img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66ace1e487a7fa0008147067/screenshot_2024-08-02-13-41-50-0000.webp&fit=cover&h=500&w=800",
    desc: "Se trata de mis primeras practicas con React.js - Consiste en un ecommerce de lotes de terrenos en un barrio residencial llamado Mandalas de agua. El proyecto está finalizado y solo es demostrativo (no para su uso comercial). Contiene un catalogo con carrusel de imagenes, un mapa con su version gratuita y una sección para comparar terrenos. [ React.js + Vite + material UI ] [Node.js + Netlify]",
    link: "https://terrenosargentinos.netlify.app/",
  },
  {
    id: 2001,
    title: "Js & Bootstrap eCommerce",
    img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66a85b7896f3010008481b23/screenshot_2024-07-30-03-18-34-0000.webp&fit=cover&h=500&w=800",
    desc: "Trabajo grupal integrador del curso Fullstack developer .Consiste en un ecommerce de articulos de PC&Gamming . El proyecto no está finalizado y solo se refiere al front-end del sitio.",
    link: "https://tp-grupo5-cilsa.netlify.app/",
  },
  {
    id: 3001,
    title: "Listado de Certificaciones",
    img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/668376123ba29a0008bc33e2/screenshot_2024-07-02-03-38-12-0000.webp&fit=cover&h=500&w=800",
    desc: "El proyecto nació para practicar el consumo de APIs mediante Js y poder hacer uso de los endpoints que tenia desplegado. El mismo lista mediante una api todas las certificaciones de los cursos de programación que tomé a lo largo de mi carrera. El proyecto está terminado y realizo mantenimiento al mismo cada que sea necesario. Utilicé JS Css y Html debido a la sencillez del mismo.",
    link: "https://ematijasevic-certificados.netlify.app/",
  },
  {
    id: 4001,
    title: "Página de presentación",
    img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6268c699d813ad000877da11/screenshot_2022-04-27-04-29-20-0000.png&fit=cover&h=500&w=800",
    desc: "Fue la primera práctica real que hice con JS , el proyecto consistía en un portafolio virtual - El mismo actualmente fue reemplazado por el sitio actual en cuestión",
    link: "https://emersonmatijasevic.netlify.app/",
  },
  {
    id: 5001,
    title: "Editor Automata",
    img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66873d3ae11c9d00080d7f35/screenshot_2024-07-05-00-24-48-0000.webp&fit=cover&h=500&w=800",
    desc: "Desarrollado con vanilla JS , el proyecto me fue util para practicar mis conocimientos en Css y Html - Consiste en un lienzo en el cual se pueden desplegar puntos y unir los mismo con flechas. luego al agregar entradas y salidas a las flechas y nombres a los puntos se tiene un grafico de grafos para representar automatas de estados finitos. El proyecto quedó en estado incompleto porque decidí comenzar de nuevo utilizando algun framework de JS",
    link: "https://ematijasevic-aef.netlify.app/",
  },
  {
    id: 6001,
    title: "Ejemplo de Formulario",
    img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6672033fe3f41b00084d1f50/screenshot_2024-06-18-21-59-45-0000.webp&fit=cover&h=500&w=800",
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt="" />
            </a>
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
        <h1>Proyectos no Genexus</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
