import { Button, Form } from "react-bootstrap"
import { Rating } from "./Rating.jsx"
import { useState } from "react"
import { CartState } from "../../context/Context"

export const Filters = () => {

    const { filterState: { sort, byStock, byRating, byFastDelivery }, filterDispatch
    } = CartState();

    console.log(sort, byStock, byRating, byFastDelivery);

    return (
        <div className='filters'>
            <span className='title'>Filter Products</span>
            <span><Form.Check
                onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })}
                checked={sort === "lowToHigh" ? true : false}
                inline label='Ascending' name='group1' type='radio' id={`inline-1`}></Form.Check></span>
            <span><Form.Check
                onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })}
                checked={sort === "highToLow" ? true : false}
                inline label='Descending' name='group1' type='radio' id={`inline-2`}></Form.Check></span>
            <span><Form.Check
                onChange={() => filterDispatch({ type: "FILTER_BY_STOCK", payload: byStock })}
                checked={byStock}
                inline label='Include out of Stock' name='group1' type='checkbox' id={`inline-3`}></Form.Check></span>
            <span><Form.Check
                onChange={() => filterDispatch({ type: "FILTER_BY_DELIVERY", payload: byFastDelivery })}
                checked={byFastDelivery}
                inline label='Fast delivery' name='group1' type='checkbox' id={`inline-4`}></Form.Check></span>
            <span><label htmlFor="text" style={{ paddingRight: 10 }}>Rating:
                <Rating id="text" rating={byRating} onClick={(i) => filterDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })} style={{ cursor: "pointer" }} />
            </label>
            </span>
            <Button onClick={() => filterDispatch({ type: "CLEAR_FILTER" })} variant='light'>Clear</Button>
        </div>
    )
}
