import React, { useEffect, useState } from "react";
import SearchProduct from "../Components/SearchProduct";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Clothes } from "../Models/Clothes.tsx";
import { Grid } from "@mui/material";
import DetailCard from "../Components/DetailCard";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClothesById } from "../redux/action/actionClothes";

export default function ProductDetail(props) {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const clothesDispatch = useSelector(
    (state) => state.clothesReducers?.clothes
  );
  const [clothes, setClothes] = useState(new Clothes(0, "", "", 0, "", ""));

  useEffect(() => {
    dispatch(getClothesById(params.id));
  }, []);

  useEffect(() => {
    if (clothesDispatch !== undefined) {
      if (clothesDispatch.id !== 0) {
        let clothesNueva = new Clothes();
        clothesNueva.id = clothesDispatch.id;
        clothesNueva.name = clothesDispatch.name;
        clothesNueva.size = clothesDispatch.size;
        clothesNueva.price = clothesDispatch.price;
        clothesNueva.description = clothesDispatch.description;
        clothesNueva.photo = clothesDispatch.photo;
        setClothes(clothesNueva);
        console.log(clothes);
      }
    }
  }, [clothesDispatch]);

  const onClickVolver = () => {
    history.goBack();
  };
  return (
    <>
      <SearchProduct />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid
          display={"grid"}
          container
          sx={{ width: "70%", height: 550 }}
          textAlign="center"
          marginTop={5}
        >
          <Grid textAlign={"left"} pb={2}>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              size={"2x"}
              color={"#1E90FF"}
              style={{ cursor: "pointer" }}
              onClick={onClickVolver}
            />
          </Grid>

          <DetailCard
            name={clothes.name}
            size={clothes.size}
            price={clothes.price}
            description={clothes.description}
            photo={clothes.photo}
          />
        </Grid>
      </Grid>
    </>
  );
}
