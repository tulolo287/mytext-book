import { Button, Form } from "react-bootstrap"
import { Rating } from "./Rating.jsx"
import { useState } from "react"

export const Filters = () => {
    const [rate, setRate] = useState(3)
    return (
        <div className='filters'>
            <span className='title'>Filter Products</span>
            <span><Form.Check inline label='Ascending' name='group1' type='radio' id={`inline-1`}></Form.Check></span>
            <span><Form.Check inline label='Descending' name='group1' type='radio' id={`inline-2`}></Form.Check></span>
            <span><Form.Check inline label='Include out of Stock' name='group1' type='checkbox' id={`inline-3`}></Form.Check></span>
            <span><Form.Check inline label='Fast delivery' name='group1' type='checkbox' id={`inline-4`}></Form.Check></span>
            <span><label style={{ paddingRight: 10 }}>Rating:</label>
                <Rating rating={rate} onClick={(i) => setRate(i + 1)} style={{ cursor: "pointer" }} />
            </span>
            <Button variant='light'>Clear</Button>
        </div>
    )
}
