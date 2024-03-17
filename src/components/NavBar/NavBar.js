import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
function NavBarE(){
    return (
        <>
            <NavBar className="bg-body-tertiary">
                <Container>
                    <NavBar.Brand><Link to={'/'}>E-commerce </Link></NavBar.Brand>
                    <Container>
                        <Nav className=" justify-content-center">
                                <Nav.Item>
                                    <Nav.Link><Link to={`/category/Jackets`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>pants</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Link to={`/category/t-shirts`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>T-shirts</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Link to={`/category/backpack`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Backpacks</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <CartWidget/>
                                </Nav.Item>
                        </Nav>
                        
                    </Container>
                </Container>
            </NavBar>
        </>
    )
}

export default NavBarE;