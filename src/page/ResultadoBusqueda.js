import React, { useEffect, useState } from "react";
import BuscarProducto from "../Components/BuscarProducto";
import { useLocation } from "react-router";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import Imagen from "../Components/imagen";
import CartaDeBusqueda from "../Components/CartaDeBusqueda";
import { Prenda } from "../Models/Prenda.tsx";
import { useSelector, useDispatch } from "react-redux";
import { getPrendaPorNombre } from "../redux/action/actionPrendas";

export default function ResultadoBusqueda() {
  const search = useLocation();
  const dispatch = useDispatch();
  const prendasDispatch = useSelector((state) => state.prendaReducers?.prenda);

  useEffect(() => {
    dispatch(
      getPrendaPorNombre(search.search.substring(search.search.search("=") + 1))
    );
  }, [, search]);

  useEffect(() => {
    if (prendasDispatch !== undefined) {
      if (prendasDispatch.length > 1) {
          let prendasNuevas = []
        prendasDispatch.forEach((prenda) => {
          let prendaNueva = new Prenda();
          prendaNueva.id = prenda.id;
          prendaNueva.nombre = prenda.nombre;
          prendaNueva.talle = prenda.talle;
          prendaNueva.precio = prenda.precio;
          prendaNueva.descripcion = prenda.descripcion;
          prendaNueva.foto = prenda.foto;

          prendasNuevas.push(prendaNueva)
          
        });
        setPrendas(prendasNuevas)


      }
    }
  }, [prendasDispatch]);
  const [prendas, setPrendas] = useState([]);

  return (
    <>
      <BuscarProducto />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {prendas.length > 0?
        prendas.map((prenda) => {
                return (
                    <CartaDeBusqueda
                      key={prenda.id}
                      id={prenda.id}
                      nombre={prenda.nombre}
                      talle={prenda.talle}
                      precio={prenda.precio}
                      descripcion={prenda.descripcion}
                      foto={prenda.foto}
                    />
                    );
            
        }): <></>}
      </Grid>
    </>
  );
}
