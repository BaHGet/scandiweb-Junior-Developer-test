import { Col, Form, Row } from "react-bootstrap"

const labels =['SKU', 'Name', 'Price']

const ProductForm = () => {
    return (
        <>
            {
                labels.map((data, index) => {
                    return (
                        <Form.Group key={index} as={Row} className="mb-2" controlId={data.toLowerCase()}>
                            <Form.Label className="fw-bold" column sm={2} >{data}{data === 'Price' ? ' ($)' : ''}</Form.Label>
                            <Col sm={10}>
                                <Form.Control className="w-25 border border-black border-2 opacity-75" size="sm" type="name" placeholder={`#${data.toLowerCase()}`} />
                            </Col>
                        </Form.Group>
                    )
                })
            }
        </>
    )
}

export default ProductForm