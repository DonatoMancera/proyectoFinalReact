import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css"
import { Link } from 'react-router-dom';


const CartWidget = ({quantity, price}) =>{

    

    return (
        <div className="d-flex Icono" style={{ display: (price * quantity) > 0 ? 'block' : 'none'}}>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className="fa-3x"/></Link>
            <p className="m-0">{quantity}</p>
        </div>    
    )
}

export default CartWidget;