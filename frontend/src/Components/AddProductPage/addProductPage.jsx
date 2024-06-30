import Header from "../header"
import './add-product-style.css'
import { useEffect, useState } from "react"
import TypeSwitcher from "./typeSwitcher"
import ProductForm from "./productForm"
import TypeForm from "./typeForm"
import Footer from "../footer"
import { Form } from "react-bootstrap"
import { addProduct } from "../../Api"

const AddProduct = ({setPage}) => {
    const [attrbutes, setAttrbutes] = useState(null)
    const [type, setType] = useState(null)
    const [sku, setSku] = useState(null)
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [size, setSize] = useState(null)
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const [length, setLength] = useState(null)
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
    


    const AddProduct = async() => {
        let productAttrbutes = type === 'Furniture' ? {
            height,
            width,
            length
        } : type === 'Book' ? {
            weight
        } : {
            size
        }
        let product = {
            sku,
            name,
            price,
            type
        }
        product = {...product, ...productAttrbutes}
        await addProduct(product)
        setPage('home')
    }

    return (
        <>
            <Header headerName="Product Add" btn1="Save" btn2="Cancel" callback1={() => {AddProduct()}}  callback2={() => {setPage('home')}}/>
            <Form className="mb-4" id='product_form'>
                <ProductForm setSku={setSku} setName={setName} setPrice={setPrice} />
                <TypeSwitcher attrbutes={attrbutes} setAttrbutes={setAttrbutes} type={type} />
                <TypeForm type={type} setSize={setSize} setWeight={setWeight} setHeight={setHeight} setWidth={setWidth} setLength={setLength}/>
            </Form>
            <Footer />
        </>
    )
}

export default AddProduct