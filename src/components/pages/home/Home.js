import React from "react";
import NavBar from "../../organims/navBar/NavBar";
import Carousel from "../../molecules/carousel/Carousel";
import Divs from "../../organims/div1/Divs";
import Suscription from "../../organims/suscription/Suscription";
import FooterDiv from "../../organims/footer/FooterDiv";
import Instagram from "../../organims/instagram/Instagram";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Divs />
      <Instagram />
      <Suscription />
      <FooterDiv />
    </div>
  );
};

export default Home;
