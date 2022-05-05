import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterDiv = () => {
  return (
    <div>
      <Box className="footerBox">
        <div className="colfooter">
          <Typography className="titleFooter" variant="h4">Pufi</Typography>
        </div>
        <div className="colfooter">
          <Typography variant="p">PUFI RAIN</Typography>
          <br></br>
          <Typography variant="p">PUFI PUFF</Typography>
          <br></br>
          <Typography variant="p">PUFI CART</Typography>
          <br></br>
          <Typography variant="p">PUFI SNAP</Typography>
        </div>
        <div className="colfooter">
          <Typography variant="p">CONTACTO</Typography>
          <br></br>
          <Typography variant="p">AYUDA</Typography>
          <br></br>
          <Typography variant="p">COMO COMPRAR</Typography>
          <br></br>
          <Typography variant="p">TERMINOS & CONDICIONES</Typography>
        </div>
        <div className="colfooter">
          COMPRA 100% SEGURA
        </div>
        <div className="colfooter">SEGUINOS EN <FacebookIcon/> <TwitterIcon/> <InstagramIcon/> </div>
      </Box>
    </div>
  );
};

export default FooterDiv;
