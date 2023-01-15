import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getProductById = async (id) => {
    let data = await axios.get(`http://localhost:8080/users/${id}`);
    setData(data.data);
    // navigate("/detaill")
  };
  useEffect(() => {
    getProductById(id);
  }, []);
  return (
    <div id="details-part">
        <div>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Detail Page</title>
    <link rel="canonical" href="http://ecpmmerce.com/ecommerce" />
</Helmet>
    </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="image">
          <img src={data.imgurl} style={{ width: "200px", height: "250px" }} />
        </div>
        <p>
          The passage experienced a surge in popularity during the 1960s when
          </p>
         <p> Letraset used it on their dry-transfer sheets, and again during the</p>
<p>          90s as desktop publishers bundled the text with their software. Today</p>
        <p>  it’s seen...</p>
        
        <p>
          <span className="name">Id:</span>{" "}
          <span className="value">{data.id}</span>
        </p>
        <p>
          <span className="name">price:</span>{" "}
          <span className="value">{data.price}</span>
        </p>
        <p>
          <span className="name">description:</span>{" "}
          <span className="value">{data.description}</span>
        </p>
      </div>
    </div>
  );
};
export default DetailPage;
