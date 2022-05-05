import React from "react";
import Carousel1 from "../../../assets/FotoPrincipal.jpg";
import "./style.css";
import { Carousel, Button } from "react-bootstrap";
import { Typography } from "@mui/material";

const carousel = () => {
  return (
    <div>
      <Carousel className="containerCarousel">
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Carousel1} alt="First slide" />
          <Carousel.Caption>
            <Button className="shopButton">
              <Typography variant="p" className="shopTitle">S H O P</Typography>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100"  src={Carousel1} alt="Second slide" />
          <Carousel.Caption>
            <Button className="shopButton">
              <Typography variant="p" className="shopTitle">S H O P</Typography>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Carousel1} alt="Third slide" />
          <Carousel.Caption>
            <Button className="shopButton">
              <Typography variant="p" className="shopTitle">S H O P</Typography>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default carousel;
