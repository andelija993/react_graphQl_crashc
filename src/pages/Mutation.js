import React from 'react'
import { gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
mutation CreateProduct($name:String!, quantityPerUnit:Int!) {
    createProduct(name:$name, quantityPerUnit:$quantityPerUnit) {
        record {
            name
        }
    }
}`

const Mutation = () => {
    const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT, {
        variables: {
            name: "hotdog",
            quantityPerUnit: 4
        }
    })

    return (
        <div>
            <button onClick={() => createProduct()}></button>
        </div>
    )
}

export default Mutation