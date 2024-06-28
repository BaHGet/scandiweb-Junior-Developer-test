import { ButtonGroup, Dropdown, DropdownButton, Form, } from "react-bootstrap"

const types = ['DVD', 'Book', 'Furniture']

const TypeSwitcher = ({attrbutes, setAttrbutes}) => {
    return (
        <div className="d-flex flex-row justify-content-start align-items-left">
            <Form.Label className="fw-bold me-1" column sm={2} >Type Switcher</Form.Label>
            <DropdownButton
                as={ButtonGroup}
                align="end"
                drop={'end'}
                id={`productType`}
                className="border border-black border-2 opacity-75"
                size="sm"
                variant="secondary"
                title={attrbutes || `Type Switcher`}
            >
                {
                    types.map((data, index) => {
                        return (
                            <Dropdown.Item key={index} eventKey="1" onClick={() => setAttrbutes(data)}>{data}</Dropdown.Item>
                        )
                    })
                }
            </DropdownButton>
        </div>
    )
}   

export default TypeSwitcher