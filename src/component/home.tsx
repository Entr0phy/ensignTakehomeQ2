import { useState, useEffect } from "react";
import { Product } from "../types/productType";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getData = () =>
      fetch("https://fakestoreapi.com/products?limit=9")
        .then((res) => res.json())
        .then((data) => setProduct(data));

    getData();
  }, []);
  return (
    <>
    <h1 className="font-bold text-2xl text-center text-orange-500">Daily Discover Products</h1>
      <div className="grid grid-cols-3 gap-10 m-2 max-w-6xl mx-auto justify-items-center">
        {product &&
          product.map((ele) => (
            <Link to={`/component/product/${ele.id}`} key={ele.id}>
              <div className="p-2 border-grey-200 border-2 rounded">
                <div className="p-2">
                  <img className="object-contain h-96 w-96" src={ele.image} />
                </div>
                <h1 className="font-bold text-center h-16">{ele.title}</h1>
                <div className="flex justify-between p-2">
                  <h1 className="text-2xl font-bold text-red-600">
                    ${ele.price}
                  </h1>
                  <div className="flex flex-wrap">
                    <h1>{ele.rating.rate}</h1>
                    <FaStar className="m-1 " />
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
