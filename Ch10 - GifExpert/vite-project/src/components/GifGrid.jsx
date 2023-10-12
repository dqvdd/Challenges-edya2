import { useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isoading } = useFetchGifs(category);

  //getGifs(category)

  return (
    //pintar los gif
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image, key) => {
          return <GifItem key={key} {...image} />;
        })}
      </div>
    </>
  );
};
