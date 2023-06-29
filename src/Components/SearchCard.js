import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import useStyles from "../styles/styles";
import { useHistory } from "react-router-dom";

export default function SearchCard(props) {
  const classes = useStyles();
  const history = useHistory();

  const OnClickVerDetail = () => {
    history.push(`items/${props.id}`);
  };

  return (
    <Grid margin={5}>
      <Card sx={{ width: 1000, height: 350 }}>
        <Grid container>
          <Grid item pl={1} pt={1}>
            <Typography variant="h5">{props.name}</Typography>
            <Typography
              varian="body2"
              color="text.secondary"
              textAlign={"left"}
            >
              Size: {props.size} - ${props.price}
            </Typography>
          </Grid>
          <Grid item marginLeft={"80%"}>
            <CardMedia
              component="img"
              height="140"
              src={props.photo}
              alt="image de clothes"
            />
          </Grid>
        </Grid>

        <CardContent>
          <Typography variant="body2" color="text.secondary" textAlign={"left"}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Box onClick={OnClickVerDetail}>
            <Typography
              variant="body2"
              textAlign={"left"}
              className={classes.noBoton}
              pl={1}
            >
              <b>View Detail</b>
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}
