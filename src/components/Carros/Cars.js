import React, { useEffect, useState } from 'react';
import "./Cars.css"
import Nav from '../Navbar/Nav';
import Footer from '../footer/Footer';
import { Alert } from '@mui/material';
const Cars = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlJson = '/api.json';

    fetch(urlJson)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar la API');
        }
        return response.json();
      })
      .then(data => setProductos(data))
      .catch(error => {
        setError(error.message);
        console.log("Error al cargar la API: " + error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="contenedor-padre">
      <Nav/>
      <Alert variant="outlined" severity="info">
      "Gracias por unirte a nosotros. ¡Bienvenido/a a nuestro mundo digital, tendras la mejor atención con nuestros acesores !".
</Alert>

      {productos.map(producto => (
        <div className="card" key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="card-content">
            <h5 className="card-title">
              <strong>{producto.nombre}</strong>
            </h5>
            <span>Precio sugerido</span>
            <h4>${producto.precio}</h4>
            <hr />
              <a className='link-button' href="https://wa.me/3012246277">Explorar</a>
            
          </div>
        </div>
        
      ))}
      <Footer/>
    </div>
  );
}

export default Cars;

