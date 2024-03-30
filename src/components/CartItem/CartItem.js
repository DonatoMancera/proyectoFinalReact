import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/Container";



const CartItem = ({ name, price, quantity}) =>{


    return(
        <Container>
            <ListGroup className="my-2">
                <ListGroup.Item>{name}</ListGroup.Item>
                <ListGroup.Item>Cantidad: {quantity}</ListGroup.Item>
                <ListGroup.Item>precio x Unidad: {price}</ListGroup.Item>
                <ListGroup.Item>Sub Total: {price * quantity}</ListGroup.Item>
            </ListGroup>
        </Container>
    )

}

export default CartItem;