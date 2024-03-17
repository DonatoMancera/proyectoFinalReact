import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css"
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
const CartWidget = () =>{

    const { totalQuantity, addItem } = useContext(CartContext);


    return (
        <div className="d-flex Icono" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className="fa-3x"/></Link>
            <p className="m-0">{addItem.quantity}</p>
        </div>    
    )
}

export default CartWidget;