import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidgetContainer from "../../Common/CartWidget/CartWidgetContainer";
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
              <Link to="/" className="link">
                TODAS
              </Link>
            </Typography>
            <Typography>
              <Link to="/category/MLB" className="link">
                MLB
              </Link>
            </Typography>
            <Typography>
              <Link to="/category/NBA" className="link">
                NBA
              </Link>
            </Typography>
            <Typography>
              <Link to="/category/NFL" className="link">
                NFL
              </Link>
            </Typography>
          </Grid>
          <Grid item className="grid__item" xs={4}>
            <CartWidgetContainer />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default NavBar;
