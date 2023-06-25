import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import useStyles from "../styles/styles";
import { useHistory } from "react-router-dom";

export default function CartaDeBusqueda(props) {
  const classes = useStyles();
  const history = useHistory();

  const OnClickVerDetalle = () => {
    history.push(`items/${props.id}`);
  };

  return (
    <Grid margin={5}>
      <Card sx={{ width: 1000, height: 350 }}>
        <Grid container>
          <Grid item pl={1} pt={1}>
            <Typography variant="h5">{props.nombre}</Typography>
            <Typography
              varian="body2"
              color="text.secondary"
              textAlign={"left"}
            >
              Talle: {props.talle} - ${props.precio}
            </Typography>
          </Grid>
          <Grid item marginLeft={"80%"}>
            <CardMedia
              component="img"
              height="140"
              src={props.foto}
              alt="Imagen de prenda"
            />
          </Grid>
        </Grid>

        <CardContent>
          <Typography variant="body2" color="text.secondary" textAlign={"left"}>
            {props.descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Box onClick={OnClickVerDetalle}>
            <Typography
              variant="body2"
              textAlign={"left"}
              className={classes.noBoton}
              pl={1}
            >
              <b>Ver Detalle</b>
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}
