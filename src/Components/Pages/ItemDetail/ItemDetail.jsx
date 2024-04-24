import { Button } from "@mui/base";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./ItemDetail.css";

const ItemDetail = ( {item} ) => {
  return (
    <div className="prueba">
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
    </div>
  );
};

export default ItemDetail;
