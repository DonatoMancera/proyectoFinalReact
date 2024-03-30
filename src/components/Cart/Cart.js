import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/esm/Container";
import CartItem from "../CartItem/CartItem";

const Cart = () =>{
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <Container>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </Container>
        )
    }

    return (
        <Container>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>total: ${total()}</h3>
            <Button onClick={() => clearCart()}>Limpiar carrito</Button>
            <Link to="/checkout">checkout</Link>
        </Container>
    )
}

export default Cart;