import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterDiv = () => {
  return (
    <div>
      <hr />
      <Box className="footerBox">
        <div className="colfooter">
          <Typography className="titleFooter" variant="h4">
            Pufi
          </Typography>
        </div>
        <div className="colfooter">
          <Typography variant="subtitle2">PUFI RAIN</Typography>
          <br></br>
          <Typography variant="subtitle2">PUFI PUFF</Typography>
          <br></br>
          <Typography variant="subtitle2">PUFI CART</Typography>
          <br></br>
          <Typography variant="subtitle2">PUFI SNAP</Typography>
        </div>
        <div className="colfooter">
          <Typography variant="subtitle2">CONTACTO</Typography>
          <br></br>
          <Typography variant="subtitle2">AYUDA</Typography>
          <br></br>
          <Typography variant="subtitle2">COMO COMPRAR</Typography>
          <br></br>
          <Typography variant="subtitle2">TERMINOS & CONDICIONES</Typography>
        </div>
        <div className="colfooter">
          <Typography variant="subtitle2">COMPRA 100% SEGURA</Typography>
        </div>
        <div className="colfooter">
        <Typography variant="subtitle2"> SEGUINOS EN <FacebookIcon /> <TwitterIcon /> <InstagramIcon /></Typography>
         {" "}
        </div>
      </Box>
    </div>
  );
};

export default FooterDiv;
