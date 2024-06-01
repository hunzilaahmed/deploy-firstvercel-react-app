import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Product = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        // console.log(response.data.products);
        setData(response.data.products);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" flex flex-wrap gap-5 justify-center">
      {
data ? (
  <>
  {data.map((product) => (
            <Card product={product} />
          ))}
  </>
):<>
<div>Loading...</div>
</>
      }
      {/* {error ? (
        <div>Error: {error}</div>
      ) : !data ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.map((product) => (
            <Card product={product} />
          ))}
        </>
      )} */}

    </div>
  );
};

export default Product;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Product = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://dummyjson.com/products/search?q=phone')
//       .then(response => {
//         setData(response.data.products);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Product;
