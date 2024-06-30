import 'bootstrap/dist/css/bootstrap.css';
import './product-page-style.css';
import Header from '../header';
import Footer from '../footer';
import ProductCard from './productCard';
import { getProducts, deleteProduct} from '../../Api';
import { useState, useEffect } from 'react';



const Main = ({page, setPage}) => {
    const [products, setProducts] = useState([])
    const [checked, setChecked] = useState([])

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        })
    }, [page])

    
    const handleCheck = (e) => {
        let exists = false
        checked.forEach((product) => {
            if(product.sku === e.target.id){
                exists = true
            }
        })
        if(!exists){
            setChecked([...checked, {isChecked: true, sku: e.target.id}])
        }else{
            setChecked([...checked.filter(product => product.sku !== e.target.id)])
        }
    } 
    const handleAddProduct = () => {
        setPage('add')
    }

    const handleMassDelete = async() => {
        if (checked.length > 0) {
            for (let i = 0; i < checked.length; i++) {
                let removeProduct = products.filter(product => product.sku === checked[i].sku)[0]
                let keys = []
                removeProduct.attribute.forEach(attribute => {
                    keys.push(attribute.name)
                })

                let productAttrbutes = removeProduct.type === 'furniture' ? {
                    "height":removeProduct.attribute.filter(attribute => attribute.name === ('height'))[0].value,
                    "width":removeProduct.attribute.filter(attribute => attribute.name === ('width'))[0].value,
                    "length":removeProduct.attribute.filter(attribute => attribute.name === ('length'))[0].value
                } : removeProduct.type === 'book' ? {
                    "weight":removeProduct.attribute.filter(attribute => attribute.name === ('weight'))[0].value
                } : {
                    "size":removeProduct.attribute.filter(attribute => attribute.name === ('size'))[0].value
                }

                let product;
                product = {
                    sku: removeProduct.sku,
                    name: removeProduct.name,
                    price: removeProduct.price,
                    type: removeProduct.type
                }
                product = {...product, ...productAttrbutes}
                await deleteProduct(product)
            }
            setProducts(products.filter(product => !checked.map(product => product.sku).includes(product.sku)))
            setChecked([])
        }
    }

    return (
        <>
            <Header headerName="Product List" btn1="ADD" btn2="MASS DELETE" callback1={handleAddProduct} callback2={handleMassDelete} />
            <div className='d-flex flex-wrap flex-row align-items-center  m-auto'>
            {
                products.map((product, index) => {
                    return (
                        <ProductCard product={product} index={index} checked={checked} setChecked={handleCheck} />
                    )
                })
            }
            </div>
            <Footer />
        </>
    )
}

export default Main


/* 



*/