import "./Novedades.css"
import Nav from "../Navbar/Nav"
import Footer from "../footer/Footer"
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
const Novedades = () =>{
    return <div>
        <Nav/>
     <img className="img"src="images/banner/banner nuevo.jpg" alt="" />
     <Grid container spacing={2}>
  <Grid item xs={4}>
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/Novedades/img3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Somos los mejores
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
          No encontrarás autos de tan alta calidad como estos. ¡Atrévete y verás!
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={4}>
    <Card sx={{ maxWidth: 345, height: "100%"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/Novedades/img2.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Maneja con cuidado
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ textAlign: "justify" }}>
          Conducir con cuidado salva vidas. Sé responsable en el volante, mantén la atención en la carretera y respeta las normas de tránsito.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={4}>
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/Novedades/img1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Mantenimiento
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
          El mantenimiento adecuado de tu auto es más que una inversión, es una garantía de seguridad y rendimiento.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>

    <Footer/>
    </div>
}

export default Novedades