import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';
import { Rating } from './Rating';

export const Product = (props) => {
  const { product } = props;
  return (
    <Card >
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <card.Body>
        <Link to={`/product/${product.slug}`}>
          <card.Title>{product.name}</card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <card.Text>${product.price}</card.Text>
        <Button>Add to cart</Button>
      </card.Body>
    </Card>
  );
};
