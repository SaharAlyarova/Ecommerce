import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const HomeSixSection = () => {
  return (
    <div style={{width:"100%", height:"550px",padding:"1%"}}>
      <Swiper
    spaceBetween={30}
    pagination={{
      clickable: true,
      
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide ><img src="https://img.freepik.com/free-vector/elegant-hand-painted-watercolour-background-earth-tone-colours_1048-15512.jpg?w=2000" 
    alt="" style={{position:"relative"}} /><div style={{position:"absolute"}}>
<img className="avatar_image" src="https://cdn.shopify.com/s/files/1/0664/0795/6738/files/img_testimonials2_180x.png?v=1665456533"   alt="Avatar"></img>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<h4>Mason Robinson</h4>
<h4 style={{color:"blue"}}>UX-Designer</h4>
{/* <p>"“ Typi non habent claritatem insitam"</p> */}
{/* <p>" est usus legentis in iis qui facit eorum claritatem." Investigationes demonstraverunt "</p> */}
        </div>
        </SwiperSlide>
    <SwiperSlide><img src="https://img.freepik.com/free-vector/elegant-hand-painted-watercolour-background-earth-tone-colours_1048-15512.jpg?w=2000" 
    alt=""/>

    <div style={{position:"absolute"}}>
<img className="avatar_image" src=" https://cdn.shopify.com/s/files/1/0664/0795/6738/files/img_testimonials3_180x.png?v=1665456533"   alt="Avatar"></img>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<h4>Mason Robinson</h4>
<h4 style={{color:"blue"}}>UX-Designer</h4>
</div>
    
    
    
    </SwiperSlide>
    <SwiperSlide>
       <img src="https://img.freepik.com/free-vector/elegant-hand-painted-watercolour-background-earth-tone-colours_1048-15512.jpg?w=2000" 
    alt=""/>
    <div style={{position:"absolute"}}>
<img className="avatar_image" src="https://cdn.shopify.com/s/files/1/0664/0795/6738/files/img_testimonials_180x.png?v=1665456533"   alt="Avatar"></img>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<h4>Mason Robinson</h4>
<h4 style={{color:"blue"}}>UX-Designer</h4>
{/* <p>"“ Typi non habent claritatem insitam"</p> */}
{/* <p>" est usus legentis in iis qui facit eorum claritatem." Investigationes demonstraverunt "</p> */}
        </div>
    </SwiperSlide>

    <SwiperSlide ><img src="https://img.freepik.com/free-vector/elegant-hand-painted-watercolour-background-earth-tone-colours_1048-15512.jpg?w=2000" 
    alt="" style={{position:"relative"}} /><div style={{position:"absolute"}}>
<img className="avatar_image" src="https://cdn.shopify.com/s/files/1/0664/0795/6738/files/img_testimonials2_180x.png?v=1665456533"   alt="Avatar"></img>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<h4>Mason Robinson</h4>
<h4 style={{color:"blue"}}>UX-Designer</h4>
{/* <p>"“ Typi non habent claritatem insitam"</p> */}
{/* <p>" est usus legentis in iis qui facit eorum claritatem." Investigationes demonstraverunt "</p> */}
        </div>
        </SwiperSlide>


  </Swiper>
    </div>
  )
}
export default HomeSixSection