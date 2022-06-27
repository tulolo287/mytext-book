import React from 'react'
import styled from 'styled-components'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;

`

const Categories = () => {
    return (
        <>
            <div>Categories</div>
            <Container>
                {categories.map(item => <CategoryItem item={item} />)}

            </Container>

        </>
    )
}

export default Categories