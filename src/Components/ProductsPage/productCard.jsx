import { useState } from "react"

const ProductCard = ({product}) => {
    const [checked, setChecked] = useState({
        isChecked: false,
        SKU:''
    })
    return (
        <>
            <div className='d-flex flex-column  border border-black border-2 m-4' style={{ width: '14rem' ,height: '11rem', padding: '10px'}}>
                <span 
                    className={`delete-checkbox ${checked.SKU === product.SKU ? checked.isChecked ? 'checked' : '' : ''} border border-black border-2 mb-2`}
                    onClick={() => setChecked({isChecked: !checked.isChecked, SKU: product.SKU})}
                ></span>
                <div className='d-flex flex-column align-items-center fw-bold '>
                    <p className='mb-0'>{product.SKU}</p>
                    <p className='mb-0'>{product.name}</p>
                    <p className='mb-0'>{product.price} $</p>
                    <p className='mb-0'>{product.attrbute.name}:{product.attrbute.value} </p>
                </div>
            </div>
        </>
    )
}


export default ProductCard