
import { Button } from 'antd/es/radio';
import React, {  useContext } from 'react';
import {ProductsContext} from '../../../../src/context/context';

const ProductsInBasget = () => {
  // const [posts, setPosts] = useState([])
  
  const { basket, setBasket,count,setCount } = useContext(ProductsContext);
 

  const handleEmptycard = () => {
    setBasket([]);
  };
  const handleRemove = (id) => {
    let newbasget=basket.filter((elem) => elem.id !== id)
    setBasket(newbasget);

  };
  return (
    <div id="basket-card"> 
  
      <div className="container">
       
        
              {basket?.map((element) => {
                return (
                  <div>
                
                    <p>Id: {element.id}</p>
                  <img src={element.imgurl} alt="" style={{width:"300px",height:"250px"}}/>
                  <p> Price:{element.price}</p>
                  <p>Description:{element.description}</p>
                  
                 
               
                   
                      <Button type="primary" ghost style={{rowGap:"600px"}} onClick={()=>{
                        handleRemove(element.id)
                        setCount(count-1)
                      }}>
                        Remove
                      </Button>
      
                      </div>
                  
                );
              })}
        <div className="btn">
        <Button type="primary" block onClick={()=>{
                  handleEmptycard()
                  setCount(0)
                }}>Empty To Card</Button>
        </div>
      </div>
    </div>
  );
            }
export default ProductsInBasget
