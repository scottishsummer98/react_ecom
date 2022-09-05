import React from 'react'
import './Home.css'
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="../Banner.jpg" alt="" />
        <p className="product_heading1">New Arrivals</p>
        <div className="home_row">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={80}
          >
            <SwiperSlide>
              <Product
                id="1"
                title="Gamemax GCR07 Gaming Chair Green"
                price={18400}
                rating={5}
                image="chair.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="2"
                title="Samsung 55Q70A 55 Inch QLED 4K UHD Smart LED Television"
                price={110000}
                rating={4}
                image="tv.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="3"
                title="Iphone 13 Pro Max Bottle Green"
                price={129999}
                rating={5}
                image="iphone13.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="4"
                title="Mens Half Sleeve Khaki Shirt"
                price={1500}
                rating={5}
                image="dress5.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="5"
                title="Mobvoi TicWatch GTH Fitness Tracker Smartwatch"
                price={3500}
                rating={5}
                image="smartwatch.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="6"
                title="Mens Casual Shirt Printed"
                price={1200}
                rating={4}
                image="dress3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="7"
                title="Apple AirPods Pro MWP22AM/A with wireless Charging Case"
                price={8500}
                rating={3}
                image="airpods.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="8"
                title="Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip with 8GB RAM, 256GB SSD (MGND3) White"
                price={99000}
                rating={5}
                image="macbook.png"
              />
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        <p className="product_heading2">Top Selling</p>
        <div className="home_row">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={80}
          >
            <SwiperSlide>
              <Product
                id="13"
                title="Corsair K70 RGB TKL CHAMPION SERIES Mechanical Gaming Keyboard"
                price={16000}
                rating={5}
                image="keyboard.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="12"
                title="Value Top FLAIL Mid Tower E-ATX Gaming Case"
                price={5500}
                rating={4}
                image="casing.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="11"
                title="Men Black Tshirt"
                price={350}
                rating={4}
                image="dress4.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="10"
                title="Philips Sealer Black"
                price={4500}
                rating={4}
                image="sealer.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="9"
                title="Huawei Nova3 I "
                price={55000}
                rating={4}
                image="huawei.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="product_heading2">Hot Deals</p>
        <div className="home_row">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={80}
          >
            <SwiperSlide>
              <Product
                id="14"
                title="Turkish Singing Bowl"
                price={1150}
                rating={4}
                image="bowl.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="15"
                title="Duranto Life 22 Bicycle"
                price={11500}
                rating={4}
                image="bike.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="16"
                title="Chopping Tray White"
                price={1150}
                rating={4}
                image="tray.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="17"
                title="Xiaomi ENCHEN Electric Hair Clippers for Men"
                price={970}
                rating={4}
                image="trimmer.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="18"
                title="Nobin 32 inches Android LED TV"
                price={9990}
                rating={3}
                image="tvnobin.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="19"
                title="Denver Hamilton Imperial Deodorant Body Spray (165ML)"
                price={350}
                rating={5}
                image="spray.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                id="20"
                title="Decorative Flower Vase For Home"
                price={3500}
                rating={5}
                image="vase.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Home
