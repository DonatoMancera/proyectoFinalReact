
import Card from "react-bootstrap/Card";
import "./Item.css";
import { Link } from "react-router-dom";

const Item =({id, name, img, price, stock}) =>{

    
    return (
       <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={img} fluid />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                precio: ${price}
                <tr/>
                stock disponible {stock}
            </Card.Text>
            <Link to={`/item/${id}`}>ver Detalle</Link>
        </Card.Body>
       </Card>
    )
}

export default Item;