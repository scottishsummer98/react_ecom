import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="../Banner.jpg" alt="" />
        <p className="product_heading1">New Arrivals</p>
        <div className="home_row">
          <Product
            id="1"
            title="Samsung 43 Inch Smart Television"
            price={179999}
            rating={5}
            image="tv.jpg"
          />
          <Product
            id="2"
            title="Iphone 13 Pro"
            price={129999}
            rating={4}
            image="iphone13.png"
          />
          <Product
            id="3"
            title="Mens Khaki Shirt"
            price={1500}
            rating={4}
            image="dress5.jpg"
          />

          <Product
            id="6"
            title="Smart Watch"
            price={3500}
            rating={4}
            image="smartwatch.png"
          />
        </div>
        <p className="product_heading2">Top Selling</p>
        <div className="home_row">
          <Product
            id="7"
            title="Mens Casual Shirt Printed"
            price={1200}
            rating={5}
            image="dress3.jpg"
          />
          <Product
            id="8"
            title="Apple Airpods White"
            price={8500}
            rating={4}
            image="airpods.png"
          />
          <Product
            id="9"
            title="Apple Macbook M3 Chip"
            price={99000}
            rating={4}
            image="macbook.png"
          />
          <Product
            id="10"
            title="Huawei Nova3 I "
            price={55000}
            rating={4}
            image="huawei.png"
          />
          <Product
            id="11"
            title="Philips Sealer Black"
            price={4500}
            rating={4}
            image="sealer.jpg"
          />
        </div>
        <p className="product_heading2">Hot Deals</p>
        <div className="home_row">
          <Product
            id="12"
            title="Turkish Singing Bowl"
            price={1150}
            rating={4}
            image="bowl.jpg"
          />
          <Product
            id="13"
            title="Duranto Life 22 Bicycle"
            price={11500}
            rating={4}
            image="bike.jpg"
          />
          <Product
            id="14"
            title="Chopping Tray White"
            price={1150}
            rating={4}
            image="tray.jpg"
          />
          <Product
            id="15"
            title="Men Black Tshirt"
            price={350}
            rating={4}
            image="dress4.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
