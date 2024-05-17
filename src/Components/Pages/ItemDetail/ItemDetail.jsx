import { Button } from "@mui/base";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { CounterContainer } from "../../Common/Counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item, onAdd, initialValue }) => {
  return (
    <>
      {/* <div className="prueba">
        <Card className="card">
          <CardMedia
            className="card-media"
            component="img"
            image={item.img}
            title="Gorras"
          />
          <CardContent className="card-content">
            <Typography
              gutterBottom
              variant="h6"
              className="texto"
              component="div"
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              className="texto"
              component="div"
            >
              $ {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver Detalle</Button>
          </CardActions>
        </Card>
      </div> */}

      {/* <div id="prueba"> */}
      <Box className="box__detail">
        <Grid container>
          <Grid item className="grid__item-detail" xs={6}>
            <CardMedia
              className="cardMedia__detail"
              component="img"
              image={item.img}
              title={item.title}
            />
          </Grid>
          <Grid item className="grid__item-detail" xs={6}>
            <CardContent className="cardContent">
              <div className="cardContent__title">
                <h2>{item.title}</h2>
              </div>
              <div className="cardContent__price">
                <h3>$ {item.price}</h3>
              </div>
              <div className="cardContent__texto">Stock: {item.stock}</div>
              <div className="cardContent__texto">
                Categoria: {item.category}
              </div>
              <div className="cardContent__texto">{item.description}</div>
            <CounterContainer stock={item.stock} onAdd={onAdd} initialValue={initialValue}/>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
      {/* </div> */}
    </>
  );
};

export default ItemDetail;
