import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function NavBarE(){

    const  {quantity } = useContext(CartContext)
    
    return (
        <>
            <NavBar className="bg-body-tertiary">
                <Container>
                    <NavBar.Brand><Link to={'/'}>E-commerce </Link></NavBar.Brand>
                    <Container>
                        <Nav className=" justify-content-center">
                                <Nav.Item>
                                    <Nav.Link><Link to={`/category/pants`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>pants</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Link to={`/category/tshirts`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>T-shirts</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Link to={`/category/bagpack`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Backpacks</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <CartWidget quantity={quantity} />
                                </Nav.Item>
                        </Nav>
                        
                    </Container>
                </Container>
            </NavBar>
        </>
    )
}

export default NavBarE;