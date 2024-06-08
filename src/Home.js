import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {

  return (
    <div className = 'home'>
      <img className = 'home_image' src = 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt = 'image_new' />
    <div className = 'home_row'>
    <Product
    id = '12345'
    title = 'Lotusmile Womens Dressy Chiffon Blouses Summer Puff Petal Short Sleeve Shirts V Neck Casual Work Tops'
    price = {25.86}
    rating = {5}
    image = {'https://m.media-amazon.com/images/I/71IPz0VbP2L._AC_SY741_.jpg'}
    />
    <Product
    id = '123456'
    title = 'SeSe Code Womens Elegant Mesh Blouses Flowy Poncho Tops Dressy Casual Shirts'
    price = {29.99}
    rating = {4}
    image = {'https://m.media-amazon.com/images/I/7102eVjlQvL._AC_SY550_.jpg'}
    />
    </div>
    <div className = 'home_row'>
    <Product
    id = '1234567'
    title = 'Timeson Womens 3/4 Sleeve Blouses Casual V Neck Dress Shirts Double Layers Mesh Tunics Tops'
    price = {24.99}
    rating = {5}
    image = {'https://m.media-amazon.com/images/I/71xE1iRT9WL._AC_SX466_.jpg'}
    />
    <Product
    id = '12345678'
    title = 'Samefar Womens Summer Tank Tops Pleated Crewneck Casual Loose Chiffon Blouses Sleeveless Tops Business Work Shirts'
    price = {19.99}
    rating = {5}
    image = {'https://m.media-amazon.com/images/I/617mKtkCfyL._AC_SY741_.jpg'}
    />
    <Product
    id = '123456789'
    title = 'ACEVOG Chiffon Blouses for Women Dressy Bow Tie Neck Long Sleeve Work Shirt Formal Casual Wear'
    price = {29.99}
    rating = {5}
    image = {'https://m.media-amazon.com/images/I/71fJoumCUbL._AC_SY550_.jpg'}
    />
    </div>
    </div>
  )
}

export default Home
