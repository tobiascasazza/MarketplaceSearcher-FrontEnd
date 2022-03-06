import React from "react";
import BuscarProducto from "../Components/BuscarProducto";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Grid } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import useStyles from "../styles/styles";

export default function CartaDeDetalle(props) {
  return (
    <>
      <Grid>
        <Card sx={{ width: 1000, height: 600 }}>
          <Grid container>
            <Grid item marginLeft={5}>
              <Typography variant="h6">
                <b>{props.nombre}</b>
              </Typography>
              <Typography
                varian="body2"
                color="text.secondary"
                textAlign={"left"}
              >
                Talle: {props.talle}
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row">
            <Grid item sx={{ width: "50%", height: 500 }}>
              <CardMedia
                component="img"
                height="500"
                src={props.foto}
                alt="Imagen de prenda"
              />
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              sx={{ width: "50%", height: 500 }}
            >
              <CardContent>
                <Typography variant="h6" textAlign={"left"}>
                  <b>Descripcion</b>
                </Typography>
                <Typography variant="body2" textAlign={"left"}>
                  {props.descripcion}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign={"left"}
                  color="text.secondary"
                  marginTop={1}
                >
                  Precio: ${props.precio}
                </Typography>
                <Grid marginTop={5}>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    sx={{ width: 250 }}
                  >
                    Comprar
                  </Button>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
}
