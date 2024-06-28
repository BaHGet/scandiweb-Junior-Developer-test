import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <>
            <header className="nav-bar d-flex justify-content-between mt-1 ">
                <h1 className='text-dark '>Product List</h1>
                <div className="nav-btns d-flex justify-content-around">
                    <Button className='fw-bold shadow-btn' variant="light" >
                        <Link className='text-dark' to="/scandiweb-junior-developer-test/addproduct">ADD</Link>
                    </Button>
                    <Button className='fw-bold shadow-btn' variant="light">MASS DELETE</Button>
                </div>
            </header>
            <hr className='m-0 mb-4 border border-black border-1 opacity-75'/>
        </>
    )
}

export default Header