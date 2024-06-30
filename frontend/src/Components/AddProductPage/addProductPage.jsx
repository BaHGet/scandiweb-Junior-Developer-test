import Header from "../header"
import './add-product-style.css'
import { useEffect, useState } from "react"
import TypeSwitcher from "./typeSwitcher"
import ProductForm from "./productForm"
import TypeForm from "./typeForm"
import Footer from "../footer"
import { Alert, Form } from "react-bootstrap"
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
    const [massege, setMassege] = useState({"hide":true,"massega":''})
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
        if((type && sku && name && price) && (size || (weight && height && width) || length)){ 
            setMassege({"hide":true,"massega":''})
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
                "sku":sku,
                "name":name,
                "price":price,
                "type":type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
            }
            product = {...product, ...productAttrbutes}
            console.log(product)
            await addProduct(product)
            setPage('home')
        }else{
            setMassege(
                {
                    "hide":false,"massega":`Please Check ${sku ? '' : 'SKU,'}
                    ${name ? '' : 'Name,'}
                    ${price ? '' : 'Price,'} 
                    ${type ? '' : 'type'} 
                    ${type !==null ? type === 'Furniture' ? 
                        height ? width ? length ? '' : 'Length,': 'Width' : 'Height,' : type === 'Book' ? 'Weight' : 'Size' : ''} fields`
                })
        }
    }

    return (
        <>
            <Header headerName="Product Add" btn1="Save" btn2="Cancel" callback1={() => {AddProduct()}}  callback2={() => {setPage('home')}}/>
            <Form className="mb-4" id='product_form'>
                <ProductForm setSku={setSku} setName={setName} setPrice={setPrice} />
                <TypeSwitcher attrbutes={attrbutes} setAttrbutes={setAttrbutes} type={type} />
                <TypeForm type={type} setSize={setSize} setWeight={setWeight} setHeight={setHeight} setWidth={setWidth} setLength={setLength}/>
            </Form>
            <Alert variant="danger" hidden={massege.hide}>{massege.massega}</Alert>
            <Footer />
        </>
    )
}

export default AddProduct