import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button";
const CheckoutForm = () =>{
    const {cart, total, clearCart} = useContext(CartContext) //revisar nombres

    const [orderId, setOrderId] = useState("")

    const comprar = (values) => {
        const order = {
        cliente: {
            nombre: values.nombre,
            telefono: values.telefono,
            email: values.email,
        },
        products: [...cart], 
        total: total(),
        };

        const orderRef = collection(db, 'Items');

            addDoc(orderRef, order)
        .then((doc) => {
            setOrderId(doc.id);
            clearCart();
        })
        .catch((error) => {
        console.error("Error al crear la orden:", error);
    });

        if (orderId) {
            return(
                <Container>
                    <h1>Gracias por su compra</h1>
                    <h4> Numero de pedido: {orderId}</h4>
                </Container>
            )
        }
    }

    return(

        <Form onSubmit={(values) => comprar(values)}>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name="telefono" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Crear Orden
            </Button>
        </Form>
    )

}

export default CheckoutForm;