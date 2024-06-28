import Header from "../header"
import './add-product-style.css'
import { useEffect, useState } from "react"
import TypeSwitcher from "./typeSwitcher"
import ProductForm from "./productForm"
import TypeForm from "./typeForm"
import Footer from "../footer"
import { Form } from "react-bootstrap"


const AddProduct = () => {
    const [attrbutes, setAttrbutes] = useState(null)
    const [type, setType] = useState(null)

    useEffect(() => {
        switch (attrbutes) {
            case 'DVD':
                setType('DVD');
                break;
            case 'Book':
                setType('Book');
                break;
            case 'Furniture':
                setType('Furniture');
                break;
            default:
                setType(null);
        }
    }, [attrbutes])
    

    return (
        <>
            <Header headerName="Product Add" btn1="Save" btn2="Cancel" callback1={() => {}} />
            <Form className="mb-4" id='product_form'>
                <ProductForm />
                <TypeSwitcher attrbutes={attrbutes} setAttrbutes={setAttrbutes} />
                <TypeForm type={type} />
            </Form>
            <Footer />
        </>
    )
}

export default AddProduct