
import ProductPage from "../datacards/datacards";
import SignInPage from "../local/local";
import HomeFourSection from "./homefoursection";
// import ImageSlider from "./homeOneSection";
import HomeOneSection from "./homeOneSection";
import HomeSixSection from "./homesixsection";
import HomeTwoSection from "./homeTwoSection";

const HomePage = () => {
  return (
    <div >
<HomeOneSection/>
<HomeTwoSection/>
<ProductPage/>
<HomeFourSection/>
 <HomeSixSection />

{/* <ImageSlider/> */}



       <section style={{display:"flex", justifyContent:"space-around", columnGap:"15px", padding:"10%"}}>
     <a className="gl" href="# " ><img class=" w-full h-full lazyautosizes ls-is-cached lazyloaded " data-widths="[180,240]" data-aspectratio="1.92" data-sizes="auto"   sizes="179px" src="//cdn.shopify.com/s/files/1/0664/0795/6738/files/5_180x.jpg?v=1664532646 180w"></img></a>
       <a className="gl" href="# " > <img class="w-full h-full lazyautosizes ls-is-cached lazyloaded" data-widths="[180,240]" data-aspectratio="1.92" data-sizes="auto"  sizes="179px" src="//cdn.shopify.com/s/files/1/0664/0795/6738/files/4_180x.jpg?v=1664532649 180w"></img></a>
      <a className="gl" href="# " > <img class="w-full h-full lazyautosizes ls-is-cached lazyloaded" data-widths="[180,240]" data-aspectratio="1.92" data-sizes="auto" sizes="179px" src="//cdn.shopify.com/s/files/1/0664/0795/6738/files/3_180x.jpg?v=1664532646 180w"></img></a>
      <a className="gl" href="# " > <img class="w-full h-full lazyautosizes ls-is-cached lazyloaded" data-widths="[180,240]" data-aspectratio="1.92" data-sizes="auto" sizes="179px"  src="//cdn.shopify.com/s/files/1/0664/0795/6738/files/2_180x.jpg?v=1664532646 180w"></img></a>
      <a className="gl" href="# " > <img class="w-full h-full lazyautosizes ls-is-cached lazyloaded" data-widths="[180,240]" data-aspectratio="1.92" data-sizes="auto" sizes="179px" src="//cdn.shopify.com/s/files/1/0664/0795/6738/files/5_180x.jpg?v=1664532646 180w"></img></a>
      <a className="gl" href="# " > <img class="w-full h-full lazyautosizes ls-is-cached lazyloaded" data-widths="[180,240]" data-aspectratio="1.92" data-sizes="auto"  src="//cdn.shopify.com/s/files/1/0664/0795/6738/files/4_180x.jpg?v=1664532649 180w"></img></a>
     </section>

     <section className="homesection" style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
   <h2>  Join Our Newsletter</h2>
<p>Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers and</p>
<p>other discount information.</p>
    <div style={{display:"flex",flexDirection:"column", alignItems:"center",
     justifyContent:"center",rowGap:"15px"}}>
        

         <SignInPage/>
    </div>
     </section>

     <section style={{padding:"10%"}}>
     <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "53px",
        }}
      >
        <div className="shipping" style={{ border: "3px dotted #ccc",padding:"15px 45px" }}>
        <i class="fa-solid fa-truck" style={{fontSize:"30px"}}></i>
          <p> FREE SHIPPING WORLDWIDE</p>
          <p style={{color:"#8A8A8A"}}>Free shipping worldwide</p>
        </div>
        <div style={{  border: "3px dotted #ccc",padding:"15px 45px" }}>
        <i class="fa-sharp fa-solid fa-headphones-simple"  style={{fontSize:"30px"}}></i>
          <p>24/7 CUSTOMER SERVICE</p>
          <p style={{color:"#8A8A8A"}}>Service Support 24/7</p>
        </div>
        <div style={{ border: "3px dotted #ccc",padding:"15px 45px" }}>
        <i class="fa-regular fa-credit-card"  style={{fontSize:"30px"}}></i>
          <p>MONEY BACK GUARANTEE!</p>
          <p style={{color:"#8A8A8A"}}>100% Money Back - 30 Days</p>
        </div>
      </div>
     </section>

    
    </div>
  );
};

export default HomePage;
