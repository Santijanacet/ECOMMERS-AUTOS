import "./Formulario.css";
import {useNavigate}from 'react-router-dom';
import React, { useState } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Formulario = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          telefono,
        }),
      });

      if (response.ok) {
        alert("Registro exitoso");
        console.log('Datos enviados correctamente');
        // Restablecer los campos del formulario
        setUsername('');
        setEmail('');
        setPassword('');
        setTelefono('');
        // Redirigir a la ruta "/Autos"
       navigate('/Autos');
      } else {
        alert("Registro denegado");
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error al enviar los datos', error);
    }
  };


  return (
   
    <form className="formulario" onSubmit={handleSubmit}>
       
      <Container maxWidth="md" className="container">
     
        <Grid container spacing={2}>
    
          <Grid item xs={12}>
          <AccountCircleIcon style={{fontSize:"45px"}}/>
            <TextField
              variant="standard"
              label="Username"
              margin="normal"
              fullWidth
              color="primary"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              label="Email"
              type="email"
              margin="normal"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              label="Password"
              type="password"
              margin="normal"
              fullWidth
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              label="Teléfono"
              type="number"
              margin="normal"
              fullWidth
              value={telefono}
              onChange={(event) => setTelefono(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              style={{ backgroundColor: '#001796', color: '#ffffff' }}
              type="submit"
            >
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default Formulario;

