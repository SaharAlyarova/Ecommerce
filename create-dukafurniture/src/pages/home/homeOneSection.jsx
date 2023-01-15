import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Button } from 'antd';
// Import Swiper styles


// import "./styles.css";

// import required modules



const HomeOneSection = () => (
  <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
      >
        <SwiperSlide>
          <div style={{position:"relative"}}>
          <img src="https://cdn.shopify.com/s/files/1/0664/0795/6738/files/b_6_2_2700x.jpg?v=1667535557" alt="" />
          <div style={{position:"absolute", bottom:"35%", left:"3%",}}>
            <h1>Lighting</h1>
            <h1>Creative Furniture </h1>
            <p> "From luxury watches and chronographs to wall clocks"</p>
            <Button ghost>Discover Now</Button>
          </div>
          </div>
         
          </SwiperSlide>
         
       
        <SwiperSlide>
        <div style={{position:"relative"}}>
        <img src="https://cdn.shopify.com/s/files/1/0664/0795/6738/files/b_6_2_2700x.jpg?v=1667535557" alt="" />
          <div style={{position:"absolute", bottom:"35%", left:"3%"}}>
          <h1>Clock</h1>
            <h1>Creative Furniture </h1>
            <p> "From luxury watches and chronographs to wall clocks"</p>
            <Button ghost>Discover Now</Button>
          </div>
          </div>
</SwiperSlide>

      </Swiper>
);
export default HomeOneSection
