import React, { useEffect, useState } from "react";
import SearchProduct from "../Components/SearchProduct";
import { useLocation } from "react-router";
import { Grid } from "@mui/material";
import SearchCard from "../Components/SearchCard";
import { Clothes } from "../Models/Clothes.tsx";
import { useSelector, useDispatch } from "react-redux";
import { getClothesByName } from "../redux/action/actionClothes";

export default function SearchResult() {
  const search = useLocation();
  const dispatch = useDispatch();
  const clothesDispatch = useSelector(
    (state) => state.clothesReducers?.clothes
  );

  useEffect(() => {
    dispatch(
      getClothesByName(search.search.substring(search.search.search("=") + 1))
    );
  }, [, search]);

  useEffect(() => {
    if (clothesDispatch !== undefined) {
      if (clothesDispatch.length > 1) {
        let clothesNuevas = [];
        clothesDispatch.forEach((clothes) => {
          let clothesNueva = new Clothes();
          clothesNueva.id = clothes.id;
          clothesNueva.name = clothes.name;
          clothesNueva.size = clothes.size;
          clothesNueva.price = clothes.price;
          clothesNueva.description = clothes.description;
          clothesNueva.photo = clothes.photo;

          clothesNuevas.push(clothesNueva);
        });
        setClothes(clothesNuevas);
      }
    }
  }, [clothesDispatch]);
  const [clothes, setClothes] = useState([]);

  return (
    <>
      <SearchProduct />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {clothes.length > 0 ? (
          clothes.map((clothes) => {
            return (
              <SearchCard
                key={clothes.id}
                id={clothes.id}
                name={clothes.name}
                size={clothes.size}
                price={clothes.price}
                description={clothes.description}
                photo={clothes.photo}
              />
            );
          })
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}
