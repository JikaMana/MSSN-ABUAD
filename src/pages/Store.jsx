import React, { useEffect, useState } from "react";
import { ShoppingCart, Package } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Store = () => {
  const [products, setProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [products]);

  return (

    <div className="pt-32 pb-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">MSSN Store</h1>
          <div className="relative">
            <ShoppingCart className="text-primary" size={24} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image_url || "https://via.placeholder.com/50"}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-base mb-4 h-12">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">
                    ₦{product.price}
                  </span>
                  <Link
                    to="tel:+2349012345678"
                    className="btn btn-primary py-2"
                  >
                    Contact Seller
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
