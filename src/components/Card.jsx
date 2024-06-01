import React from "react";

const Card = ({product}) => {
  return (
    <>
      <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <p>Rs:{product.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
