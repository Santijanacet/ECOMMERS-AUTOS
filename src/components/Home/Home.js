import "./Home.css"
import Formulario from "../form/Formulario"
const Home = () =>{
 return <div>
    <video autoPlay loop muted>
        <source src="../video/portada.mp4" type="video/mp4" />
       
        Tu navegador no soporta el elemento video.
      </video>
      <Formulario/>

 </div>
}

export default Home