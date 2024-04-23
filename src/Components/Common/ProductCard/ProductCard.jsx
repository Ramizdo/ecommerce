import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ img, title, description, price, id }) => {
  return (
    <div>
      <Card className="card">
        <CardMedia
          className="card-media"
          component="img"
          image={img}
          title="Gorras"
        />
        <CardContent className="card-content">
          <Typography
            gutterBottom
            variant="h6"
            className="texto"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            className="texto"
            component="div"
          >
            $ {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
