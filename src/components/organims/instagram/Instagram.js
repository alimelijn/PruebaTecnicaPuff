import { Typography } from "@mui/material";
import React from "react";
import "./insta.css";
import Sticker from "../../../assets/PufiPuffFoto.jpg";
import StickerCart from "../../../assets/PufiCart.jpg";
import StickerSnap from "../../../assets/PufiNapFoto.jpg";
import StickerRain from "../../../assets/PufiRainFoto.jpg";

const Instagram = () => {
  return (
    <div className="container">
      <Typography variant="subtitle2" component="h3">
        NEWSLETTER
      </Typography>
      <Typography variant="h3">#ESPUFI</Typography>
      <div className="photosDiv">
        <div>
          <img className="col" src={Sticker} alt="" />
          <img className="col" src={StickerSnap} alt="" />
          <img className="col" src={StickerRain} alt="" />
        </div>
        <div>
          <img className="col" src={StickerCart} alt="" />
          <img className="col" src={Sticker} alt="" />
          <img className="col" src={StickerSnap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
