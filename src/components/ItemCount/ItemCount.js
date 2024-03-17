import { useState } from "react";
import "./ItemCount.css";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";

const ItemCount = ({stock, initial, onAdd})=>{
    const [quantity, setQuantity] = useState(initial);

    const increment = () =>{
        if (quantity < stock) {
            setQuantity(quantity+1);
        }
    }

    const decrement = () =>{
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        
        <Container className="m-5">
            <Row md="auto">
                <Col md="auto"><Button onClick={decrement}>-</Button></Col>
                <Col md="auto"><h3>{quantity}</h3></Col>
                <Col md="auto"><Button onClick={increment}>+</Button></Col>
            </Row>
            <Button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar a Carrito</Button>
        </Container> 
    )
}

export default ItemCount;