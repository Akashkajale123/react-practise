import React from 'react'
import Item from '../item/item.js'
import data_product from '../Assests/data'
import './RelatedProducts.css'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
          return <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
          />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
