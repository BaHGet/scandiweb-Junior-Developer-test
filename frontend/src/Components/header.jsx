import Button from 'react-bootstrap/Button';

const Header = ({headerName, btn1, btn2, callback1, callback2,}) => {
    return (
        <>
            <header className="nav-bar d-flex justify-content-between mt-1 ">
                <h1 className='text-dark '>{headerName}</h1>
                <div className="nav-btns d-flex justify-content-around">
                    <Button key={btn1} text={btn1} id={btn1} form='product_form' className='fw-bold shadow-btn' variant="light" onClick={callback1}>{btn1}</Button>
                    <Button key={btn2} text={btn2}  id={btn2} className='fw-bold shadow-btn' variant="light" onClick={callback2}>{btn2}</Button>
                </div>
            </header>
            <hr className='m-0 mb-4 border border-black border-1 opacity-75'/>
        </>
    )
}

export default Header