import React from 'react'

const HomeTwoSection = () => {
  return (
    <section style={{backgroundColor:"white"}}>
<div className='homeTwoPage' style={{display:"flex", justifyContent:"space-between", alignItems :"center",padding:"5%" }}>
   <a href="#" target="_blank" style={{color:"black",textDecoration:"none"}}> 
   <div className='twoPage1' style={{backgroundColor:"#EEF0EF",width:"390px",height:"225",borderRadius:"8px",position:"relative"}}>
        
        <div>
            <a href="#" target="_blank"><img className='imagetwoSection' src="https://cdn.shopify.com/s/files/1/0664/0795/6738/files/5_1_1512x.jpg?v=1667450505" alt="" /></a>
        </div>
        <div style={{position:"absolute",top:"10%",left:"50%"}}>
            <h1>Mega Sale</h1>
            <h1>Of Up To</h1>
            <p style={{color:"grey"}}>Lamps Lightining</p>
            <h3 style={{color:"blue"}}>From:$127.00</h3>
        </div>
        </div> </a>
    <a href="#" target="_blank" style={{color:"black",textDecoration:"none"}}>
    <div className='twoPage2' style={{backgroundColor:"#EEF0EF",width:"390px",height:"225",borderRadius:"8px",position:"relative"}}>
        <div>
        <a href="#" target="_blank"><img className='imagetwoSection' src="https://cdn.shopify.com/s/files/1/0664/0795/6738/files/5_2_720x.jpg?v=1667450505" alt="" /></a>
        </div>
        <div style={{position:"absolute",top:"10%",left:"50%"}}>
            <h1>Duka</h1>
            <h1>Home Deco</h1>
            <p style={{color:"grey"}}>Creative Home Deco</p>
            <h3 style={{color:"blue"}}>From:$167.00</h3>
        </div>
    </div>
    </a>
   <a href="#" target="_blank" style={{color:"black",textDecoration:"none"}}>
   <div className='twoPage3' style={{backgroundColor:"#EEF0EF",width:"390px",height:"225",borderRadius:"8px",position:"relative" }}>
        <div>
        <a href="#" target="_blank"><img className='imagetwoSection' 
        src= "https://cdn.shopify.com/s/files/1/0664/0795/6738/files/5_3_14bfec49-6f32-4d70-b639-9a203d6080db_720x.jpg?v=1667450531" alt="" /></a>
        </div>
        <div style={{position:"absolute",top:"10%",left:"50%"}}>
            <h1>Creative</h1>
            <h1>Table Design</h1>
            <p style={{color:"grey"}}>Tablets & Chair</p>
            <h3 style={{color:"blue"}}>From:$227.00</h3>
        </div>
    </div>
   </a>
</div>
<div className='homeTwoDiv' style={{padding:"3%"}}>
    <div style={{ border: "3px dotted #ccc",padding:"2%" }}>
<h3>FREE UK DELIVERY + RETURN OVER £85.00 (EXCLUDING HOMEWARE)| FREE UK COLLECT FROM STORE</h3>
    </div>
</div>
    </section>
  )
} 

export default HomeTwoSection