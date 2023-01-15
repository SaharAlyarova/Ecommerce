import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'antd/es/radio'
import {ProductsContext} from '../../context/context';
import {Helmet} from 'react-helmet'
const ProductPage = () => {
 
  const { count, setCount, basket, setBasket } =
  useContext(ProductsContext);
 

  const handleAddCard = (product) => {
    if (!basket.find((el)=>el.id===product.id)) {
      setBasket([...basket, product]);
      setCount(count + 1)
    } else {
      alert("you already added this product");
    }
  };
    const [posts, setPosts] = useState([])
    const getData = async()=>{
      const data = await axios ("http://localhost:8080/users");
      setPosts(await data.data)
    }
    useEffect(() => {
    getData();
    }, [])
  return (

  <div>
    <div>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Home Page</title>
    <link rel="canonical" href="http://ecpmmerce.com/ecommerce" />
</Helmet>
    </div>
    <div>
<h1>New Arrivals</h1>
<p>Claritas est etiam processus dynamicus, qui sequitur.</p>
</div>
      <div style={{display:"flex", flexWrap:"wrap",padding:"5%"}}>

        {posts?.map((element,i) => {
            return(
  <div key={element.id} >
    <img  src={element.imgurl} alt="" style={{width:"300px",height:"250px"}}  className='mapimg'/>
    <p> Price:{element.price}</p>
    <p>Description:{element.description}</p>
    <Link to={`/detaill/${element.id}`}><Button type="dashed" ghost>
      Detail
    </Button></Link>  
    <Button ghost onClick={()=>{handleAddCard(element)
   
    
    }}>Add To Basget</Button>
   {/* <NavLink to={"/productsinbasget"}>Go Basget Page</NavLink> */}
  </div>
        )})}
        
   
 
    {/* <Link to={`/detaill/${element.id}`}><Button type="dashed" ghost>
      Detail
    </Button></Link>   */}
    {/* <Button ghost onClick={(e)=>{handleAddCard(e)}}>Add To Basget</Button> */}
  
    </div> 
  </div>
  )
}
export default ProductPage