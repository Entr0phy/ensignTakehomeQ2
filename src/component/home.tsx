import { useState, useEffect } from "react";
import { Product } from "../types/productType";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getData = () =>
      fetch("https://fakestoreapi.com/products?limit=12")
        .then((res) => res.json())
        .then((data) => setProduct(data));

    getData();
  }, []);
  return (
    <>
    <h1 className="font-bold text-2xl text-center text-orange-500">Daily Discover Products</h1>
      <div className="grid grid-cols-4 gap-10 m-2 max-w-6xl mx-auto justify-items-center">
        {product &&
          product.map((ele) => (
            <Link to={`/component/product/${ele.id}`} key={ele.id}>
              <div className="p-2 border-grey-200 border-2 rounded shadow h-96 bg-white">
                <div className="p-2 border-2">
                  <img className="object-contain h-48 w-48" src={ele.image} />
                </div>
                <h1 className="font-bold text-center text-clip overflow-hidden h-16">{ele.title.length > 40 ? `${ele.title.substring(0, 40)}...` : ele.title}</h1>
                
                  <h1 className="text-2xl font-bold text-red-600">
                    ${ele.price}
                  </h1>
                  <div className="flex flex-wrap text-orange-00">
                    <h1>Ratings: {ele.rating.rate}/5</h1>
                    <FaStar className="m-1 " />
                  </div>
                
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
