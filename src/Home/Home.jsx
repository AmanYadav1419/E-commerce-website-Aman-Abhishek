import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSpread from './LocationSpread'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSpread />
    </div>
  )
}

export default Home;