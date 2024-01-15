import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/NewCollection/NewCollections'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop
