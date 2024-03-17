import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import { CartContext } from "../Context/CartContext";

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return(
        <Card className="Card-ItemDetail mt-5 center">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Img src={img} fluid/>
                <Card.Text>
                    Categoria: {category}
                    <tr/>
                    Descripcion: {description}
                    <tr/>
                    Precio: ${price}
                </Card.Text>
                <Card.Footer>
                    {
                        quantityAdded > 0 ? (
                            <Button><Link to='/cart'> Terminar Compra</Link></Button>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;