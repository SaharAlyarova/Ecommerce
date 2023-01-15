const express=require("express");
const cors =require("cors");
const bodyParser=require("body-parser");
const app =express()
const port=8080;
let idCounter=9;
let users= 
     [
      {
        "id": 1,
       
        "price": "$122.00",
        "description": " Schouler White Label",
        "imgurl": "https://cdn.shopify.com/s/files/1/0664/0795/6738/products/TheFormBag_540x.jpg?v=1664855930"
      },
      {
        "id": 2,
       
        "price": "$122.00",
        "description": " Schouler White Label",
        "imgurl": "https://cdn.shopify.com/s/files/1/0664/0795/6738/products/TheItalianLeatherSquareToeChelseaBoot2_540x.jpg?v=1664855952"
      },
      {
        "id": 3,
      
        "price": "$69.00",
        "description": " Schouler White Label",
        "imgurl": "https://cdn.shopify.com/s/files/1/0664/0795/6738/products/TheCleanSilkShort-SleeveSquareShirt2_540x.jpg?v=1664855925"
      },
      {
        "id": 4,
       
        "price": "$69.00",
        "description": " Schouler White Label",
        "imgurl": "https://cdn.shopify.com/s/files/1/0664/0795/6738/products/11_de663077-9a9f-45f9-a7d8-656dd90a8d3f_540x.jpg?v=1664857772"
      },
      {
        "id": 5,
       
        "price": "$122.00",
        "description": " Schouler White Label",
        "imgurl": "https://cdn.shopify.com/s/files/1/0664/0795/6738/products/TheFormBag_540x.jpg?v=1664855930"
      },
      {
        "id": 6,
       
        "price": "$122.00",
        "description": " Schouler White Label",
        "imgurl": "https://cdn.shopify.com/s/files/1/0664/0795/6738/products/TheItalianLeatherSquareToeChelseaBoot2_540x.jpg?v=1664855952"
      },
      {
        "id": 7,
      
        "price": "$69.00",
        "description": " Schouler White Label",
        "imgurl": "https://cdn.shopify.com/s/files/1/0664/0795/6738/products/TheCleanSilkShort-SleeveSquareShirt2_540x.jpg?v=1664855925"
      },
      {
        "id": 8,
       
        "price": "$69.00",
        "description": " Schouler White Label",
        "imgurl": "https://cdn.shopify.com/s/files/1/0664/0795/6738/products/11_de663077-9a9f-45f9-a7d8-656dd90a8d3f_540x.jpg?v=1664857772"
      },
    ]

    app.use(cors());
    app.use(bodyParser.json())
    app.get("/users",(req,res)=>{
      res.send(users);
    })


//get user by id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  const selectedUser = users.find((user) => user.id == id);
  if (selectedUser) {
    res.send(selectedUser);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});
//post new user
app.post("/users", (req, res) => {
  console.log(req.body);
  const userObj = {
    id: idCounter++,
    name: req.body.name,
    username: req.body.username,
  };
  users.push(userObj);
});

app.listen(port,()=>{
    console.log(`"http://localhost:${port}"`)
})
