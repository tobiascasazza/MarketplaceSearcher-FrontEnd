import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  Grid,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import useStyles from "../styles/styles";
import { blue } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";

export default function SearchProduct() {
  const classes = useStyles();
  const [buscar, setBuscar] = useState("");
  const history = useHistory();

  const buscarOnChance = (event) => {
    setBuscar(event.target.value);
  };

  const onClickBuscar = () => {
    history.replace("/");
    history.push(`items?search=${buscar}`);
  };

  const Enter = (e) => {
    if (e.keyCode == 13) {
      history.replace("/");
      history.push(`items?search=${buscar}`);
    }
  };
  return (
    <>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
        className={classes.barraSuperior}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          <TextField
            variant="standard"
            label="Search product"
            className={classes.searcher}
            value={buscar}
            sx={{ width: "30%" }}
            onKeyDown={Enter}
            InputProps={{
              endAdornment: (
                <Box onClick={onClickBuscar}>
                  <InputAdornment position="start">
                    <SearchIcon color="white" className={classes.lupa} />
                  </InputAdornment>
                </Box>
              ),
            }}
            onChange={buscarOnChance}
          />
        </Typography>
      </Toolbar>
    </>
  );
}
