import React from 'react'

const ProductCard = ({props}) => {
    console.log("props",props)
  return (
    <div key={props.title}>
         <p>
        Title :{props.title} <br />
        Price :<b>{props.price}</b>
        </p>
    </div>
  )
}

export default ProductCard