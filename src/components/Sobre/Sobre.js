import "./Sobre.css";
import Nav from "../Navbar/Nav";
import { Alert } from "@mui/material";
import Footer from "../footer/Footer"

const Sobre = () => {
  return (
    <div >
      <Nav />
      <Alert severity="success" color="info">
        Queremos recordarle que usted como cliente siempre será nuestra prioridad
      </Alert>

      <h1 className="tit">Sobre Nosotros</h1>

      <p className="des">
        En nuestra tienda, nos enorgullece presentar una experiencia de compra
        única para entusiastas de los automóviles de alta gama. Nos
        especializamos en la asesoría y venta de vehículos exclusivos, desde
        sedanes de lujo hasta deportivos de alto rendimiento, que representan lo
        mejor en diseño, tecnología y rendimiento. En nuestro equipo, contamos
        con expertos apasionados por el mundo automotriz, conocedores de las
        últimas tendencias y características de los automóviles de lujo.
        
        <br />
        Estamos
        comprometidos en brindar un servicio personalizado y una atención
        excepcional a cada cliente, comprendiendo sus preferencias, necesidades
        y presupuesto para guiarlos hacia la elección perfecta. Trabajamos
        estrechamente con fabricantes de renombre y fuentes confiables para
        garantizar que nuestro inventario esté compuesto por automóviles de alta
        calidad y de edición limitada. Desde marcas emblemáticas hasta vehículos
        exóticos y raros, nuestra selección ofrece una amplia gama de opciones
        para aquellos que buscan la máxima exclusividad. Además, no solo nos
        enfocamos en la venta de vehículos de alta gama, sino que también
        brindamos servicios de asesoramiento integral. Nuestro equipo de
        expertos está disponible para proporcionar información detallada sobre
        las características técnicas, opciones de personalización, mantenimiento
        y valoración de su automóvil actual. Nos esforzamos por crear un
        ambiente acogedor y elegante en nuestra tienda, donde los entusiastas de
        los automóviles pueden explorar y admirar estas obras maestras de la
        ingeniería automotriz. Nuestro objetivo es superar las expectativas de
        nuestros clientes, ofreciendo una experiencia de compra excepcional y
        convirtiéndonos en su socio de confianza en el apasionante mundo de los
        automóviles de alta gama. Ya sea que estés buscando el automóvil de tus
        sueños o necesites asesoramiento experto, en nuestra tienda de asesoría
        en venta de automóviles de alta gama encontrarás una atención dedicada,
        conocimiento profundo y una selección extraordinaria que te ayudarán a
        vivir la emoción de conducir el automóvil perfecto para ti."
      </p>



      <span className="span">Gracias por ser parte de nuestra familia de clientes.</span>
      <Footer/>
    </div>
  );
};

export default Sobre;
