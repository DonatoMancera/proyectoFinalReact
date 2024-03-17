import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/Container";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


const CartItem = ({ name, price}) =>{

    const {addItem, totalQuantity} = useContext(CartContext);

    return(
        <Container>
            <ListGroup className="my-2">
                <ListGroup.Item>{name}</ListGroup.Item>
                <ListGroup.Item>Cantidad: {addItem.quantity}</ListGroup.Item>
                <ListGroup.Item>precio x Unidad: {price}</ListGroup.Item>
                <ListGroup.Item>Sub Total: {totalQuantity}</ListGroup.Item>
            </ListGroup>
        </Container>
    )

}

export default CartItem;