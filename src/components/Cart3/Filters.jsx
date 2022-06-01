import { Button, Form } from "react-bootstrap"
import { Rating } from "./Rating.jsx"
import { useState } from "react"

export const Filters = () => {
    const [rating, setRate] = useState(3)
    return (
        <div className='filters'>
            <span className='title'>Filter Products</span>
            <span><Form.Check inline label='Ascending' name='group1' type='radio' id={`inline-1`}></Form.Check></span>
            <span><Form.Check inline label='Descending' name='group1' type='radio' id={`inline-2`}></Form.Check></span>
            <span><Form.Check inline label='Include out of Stock' name='group1' type='checkbox' id={`inline-3`}></Form.Check></span>
            <span><Form.Check inline label='Fast delivery' name='group1' type='checkbox' id={`inline-4`}></Form.Check></span>
            <span><label htmlFor="text" style={{ paddingRight: 10 }}>Rating:
                <Rating id="text" rating={rating} onClick={(i) => setRate(i + 1)} style={{ cursor: "pointer" }} />
            </label>
            </span>
            <Button variant='light'>Clear</Button>
        </div>
    )
}
