import { Col, Form, Row } from "react-bootstrap"

const labels =['SKU', 'Name', 'Price']

const ProductForm = ({setSku, setName, setPrice}) => {
    return (
        <>
            {
                labels.map((data, index) => {
                    return (
                        <Form.Group key={index} as={Row} className="mb-2" controlId={data.toLowerCase()}>
                            <Form.Label className="fw-bold" column sm={2} >{data}{data === 'Price' ? ' ($)' : ''}</Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    required
                                    className="w-25 border border-black border-2 opacity-75" size="sm" 
                                    type={data === 'Price' ? 'number' : 'name'} 
                                    min={0} 
                                    placeholder={`#${data.toLowerCase()}`} 
                                    onChange={(e) => {data === 'SKU' ? setSku(e.target.value) : data === 'Name' ? setName(e.target.value) : setPrice(e.target.value)}}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                    )
                })
            }
        </>
    )
}

export default ProductForm