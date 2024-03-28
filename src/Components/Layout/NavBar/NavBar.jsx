import { Box, Grid, Typography } from "@mui/material";
import CartWidget from "../../Common/CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="container">
      <Box className="box">
        <Grid container>
          <Grid item className="grid__item" xs={4}>
            <Logo />
          </Grid>
          <Grid item className="grid__item" xs={4}>
            <Typography>
              <a href="#" className="link">
                TODAS
              </a>
            </Typography>
            <Typography>
              <a href="#" className="link">
                MLB
              </a>
            </Typography>
            <Typography>
              <a href="#" className="link">
                NBA
              </a>
            </Typography>
            <Typography>
              <a href="#" className="link">
                NFL
              </a>
            </Typography>
          </Grid>
          <Grid item className="grid__item" xs={4}>
            <CartWidget />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default NavBar;
