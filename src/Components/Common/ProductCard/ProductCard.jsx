import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
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
          <Link to={`/itemDetail/${id}`}>
            <Button size="small">Ver Detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
