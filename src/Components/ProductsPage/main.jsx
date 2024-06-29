import 'bootstrap/dist/css/bootstrap.css';
import './product-page-style.css';
import Header from '../header';
import Footer from '../footer';
import ProductCard from './productCard';


const products = [
    {
        SKU: 'TR1200555',
        name: 'Chair',
        type: 'Furniture',
        price: 200,
        attrbute: {
                "name":"Dimension",
                "value":'24x45x15'
        }
    },
    {
        SKU: 'TR1200556',
        name: 'Chair',
        type: 'Furniture',
        price: 100,
        attrbute: {
            "name":"Dimension",
            "value":'24x35x10'
        }
    },
    {
        SKU: 'JVC200123',
        name: 'Acme DISC',
        type: 'DVD-disc',
        price: 1,
        attrbute: {
            "name":"Size",
            "value":'700 MB'
        }
    },
    {
        SKU: 'JVC200124',
        name: 'Acme DISC',
        type: 'DVD-disc',
        price: 2,
        attrbute: {
            "name":"Size",
            "value":'1 GB'
        }
    },
    {
        SKU: 'GGWP0007',
        name: 'War and Peace',
        type: 'Book',
        price: 20,
        attrbute: {
            "name":"Weight",
            "value":'1 KG'
        }
    },
    {
        SKU: 'GGWP0008',
        name: 'War and Peace',
        type: 'Book',
        price: 30,
        attrbute: {
            "name":"Weight",
            "value":'2 KG'
        }
    }
]

const Main = ({setPage}) => {
    const handleAddProduct = () => {
        setPage('add')
    }
    return (
        <>
            <Header headerName="Product List" btn1="ADD" btn2="MASS DELETE" callback1={handleAddProduct} />
            <div className='d-flex flex-wrap flex-row align-items-center' m-auto>
            {
                products.map((product) => {
                    return (
                        <ProductCard product={product} key={product.SKU} />
                    )
                })
            }
            </div>
            <Footer />
        </>
    )
}

export default Main