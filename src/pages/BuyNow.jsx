import React, { useEffect, useState } from "react";

const BuyNow = () => {
  const [getFetchPost, setGetFetchPost] = useState([]);

  const fetchApiData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setGetFetchPost(data));
  };

  console.log(getFetchPost);

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="bg-amber-50 grid grid-cols-5 p-5 m-10">
      {getFetchPost.map((data, i) => (
        <section className="rounded-2xl border m-4 p-2" key={i}>
          <h1 className="font-bold"> Title: {data.title} </h1>
          <p className="font-semibold"> Price= #{data.price}</p>
          <img src={data.image} className="size-40" alt="" />
        </section>
      ))}
    </div>
  );
};

export default BuyNow;
