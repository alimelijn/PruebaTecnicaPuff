import React from "react";
import "./style.css";
import Background1 from "../../../assets/PufiRainFoto.jpg";
import Sticker from "../../../assets/PufiRainIcono.jpg";
import StickerPuff from "../../../assets/PufiPuffIcono.jpg"
import StickerCart from "../../../assets/PufiCartIcono.jpg"
import StickerSnap from "../../../assets/PufiNapIcono.jpg"
import { Button } from "react-bootstrap";
import { Typography } from "@mui/material";

const Divs = () => {
  return (
    <div>
      <div>
        <div id="rain" className="col1" style={{ backgroundImage: { Background1 } }}>
          <Button className="shopButton">
            <Typography variant="p">S H O P</Typography>
          </Button>
        </div>
        <div className="col2">
          <img src={Sticker} alt="" />
          <Typography variant="h5">Pufi RAIN</Typography>
          <Typography variant="p">Descripcion del producto. Este es</Typography>
          <Typography>un texto simulado</Typography>
        </div>
      </div>
      <div>
        <div id="puff" className="col2" style={{ backgroundImage: { Background1 } }}>
          <img src={StickerPuff} alt="" />
          <Typography variant="h5">Pufi PUFF</Typography>
          <Typography variant="p">Descripcion del producto. Este es</Typography>
          <Typography>un texto simulado</Typography>
        </div>
        <div className="col3">
          <Button className="shopButton">
            <Typography variant="p">S H O P</Typography>
          </Button>
        </div>
      </div>
      <div>
        <div id="cart" className="col4" style={{ backgroundImage: { Background1 } }}>
          <Button className="shopButton">
            <Typography variant="p">S H O P</Typography>
          </Button>
        </div>
        <div className="col2">
          <img src={StickerCart} alt="" />
          <Typography variant="h5">Pufi CART</Typography>
          <Typography variant="p">Descripcion del producto. Este es</Typography>
          <Typography>un texto simulado</Typography>
        </div>
      </div>
      <div>
        <div id="snap" className="col2" style={{ backgroundImage: { Background1 } }}>
          <img src={StickerSnap} alt="" />
          <Typography variant="h5">Pufi SNAP</Typography>
          <Typography variant="p">Descripcion del producto. Este es</Typography>
          <Typography>un texto simulado</Typography>
        </div>
        <div className="col5">
          <Button className="shopButton">
            <Typography variant="p">S H O P</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Divs;
