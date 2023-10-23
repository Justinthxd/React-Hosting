import React, { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]);

  const [images, setImages] = useState([]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-wrap">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;
