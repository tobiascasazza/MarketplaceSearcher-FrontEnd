import React, { useEffect, useState } from "react";
import BuscarProducto from "../Components/BuscarProducto";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Grid } from "@mui/material";
import CartaDeDetalle from "../Components/CartaDeDetalle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPrendaPorId } from "../redux/action/actionPrendas";
import { Prenda } from "../Models/Prenda.tsx";

export default function DetalleDelProducto(props) {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const prendaDispatch = useSelector((state) => state.prendaReducers?.prenda);
  const [prenda, setPrenda] = useState(new Prenda(0, "", "", 0, "", ""));

  useEffect(() => {
    dispatch(getPrendaPorId(params.id));
  }, []);

  useEffect(() => {
    if (prendaDispatch !== undefined) {
        
      
      if (prendaDispatch.id !== 0) {
        let prendaNueva = new Prenda();
        prendaNueva.id = prendaDispatch.id;
        prendaNueva.nombre = prendaDispatch.nombre;
        prendaNueva.talle = prendaDispatch.talle;
        prendaNueva.precio = prendaDispatch.precio;
        prendaNueva.descripcion = prendaDispatch.descripcion;
        prendaNueva.foto = prendaDispatch.foto;
        setPrenda(prendaNueva);
        console.log(prenda)
      }
    }
  }, [prendaDispatch]);

  const onClickVolver = () => {
    history.goBack();
  };
  return (
    <>
      <BuscarProducto />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid
          container
          sx={{ width: "70%", height: 550 }}
          textAlign="center"
          marginTop={5}
        >
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            size={"2x"}
            color={"#1E90FF"}
            style={{ cursor: "pointer" }}
            onClick={onClickVolver}
          />
          <CartaDeDetalle
            nombre={prenda.nombre}
            talle={prenda.talle}
            precio={prenda.precio}
            descripcion={prenda.descripcion}
            foto={prenda.foto}
          />
        </Grid>
      </Grid>
    </>
  );
}
