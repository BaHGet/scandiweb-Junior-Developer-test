import { useEffect, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"


const TypeForm = ({type}) => {
    const [element, setElement] = useState()
    useEffect(() => {
        switch (type) {
            case 'DVD':
                setElement(
                    <>
                        <Form.Label className="fw-bold" column sm={2} >Size (MB)</Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                className="w-25 border border-black border-2 opacity-75" 
                                id='size'
                                size="sm" 
                                type="name" 
                                placeholder={`#size`} 
                            />
                        </Col>
                    </>
                )
                break;
            
            case 'Book':
                setElement(
                    <>
                        <Form.Label className="fw-bold" column sm={2} >Weight (KG)</Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                className="w-25 border border-black border-2 opacity-75" 
                                id='weight'
                                size="sm" 
                                type="name" 
                                placeholder={`#weight`} 
                            />
                        </Col>
                    </>
                )
                break;
            
            case 'Furniture':
                setElement(
                    ['Height', 'Width', 'Length'].map((data, index) => {
                        return (
                            <>
                                <Form.Label key={data +'Label'+index} className="fw-bold" column sm={2} >{data} (CM)</Form.Label>
                                <Col key={data +'Col'+index} sm={10}>
                                    <Form.Control 
                                        key={data +'Control'+index}
                                        id={data.toLowerCase()}
                                        className="w-25 border border-black border-2 opacity-75" 
                                        size="sm" 
                                        type="name" 
                                        placeholder={`#${data.toLowerCase()}`} 
                                    />
                                </Col>
                            </>
                        )
                    }) 
                )
                break;
            
            case null:
                setElement('select a type first')
                break;
            default:
                setElement('select a type first')
                break;
        }
    }, [type])

    return (
        <>
            <div className="mt-3" id={type} >
                <Form.Group as={Row} className="mb-2" controlId="formHorizontalName">
                    {element}

                    {
                        type === null ? '':<Form.Text className="text-dark">
                        {`Please Provide ${type === 'Furniture' ?
                            'Dimension in HxWxL Format' : type === 'Book' ?
                                'The Weight in KG' : 'The Size in MB'} `} 
                            </Form.Text>
                    }
                    
                    
                </Form.Group>  
            </div>
        </>
    )
}

export default TypeForm