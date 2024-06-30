import { Fragment } from "react"


const ProductCard = ({product, index, checked, setChecked}) => {
    
    
    return (
        <Fragment key={'product-card-'+index}>
            <div className='d-flex flex-column  border border-black border-2 m-4' style={{ width: '14rem' ,height: '13rem', padding: '10px'}}>
                <span 
                    id={product.sku}
                    key={'delete-checkbox-'+index}
                    className={`delete-checkbox ${checked.map(product => product.sku).includes(product.sku) ? 'checked' : ''} border border-black border-2 mb-2`}
                    onClick={(e) => setChecked(e)}
                ></span>
                <div key={'product-info-'+index} className='d-flex flex-column align-items-center fw-bold '>
                    <p key={'product-sku-'+index} className='mb-0'>{product.sku}</p>
                    <p key={'product-name-'+index} className='mb-0'>{product.name}</p>
                    <p key={'product-price-'+index} className='mb-0'>{product.price}$</p>
                    {
                        product.attribute.map((attribute ,index) => {
                            return (
                                <p key={attribute.name+'-'+index} className='mb-0'>{attribute.name}: {attribute.value}{product.type === 'book' ? 'KG' : product.type === 'furniture' ? 'Cm' : 'Mb'} </p>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}


export default ProductCard