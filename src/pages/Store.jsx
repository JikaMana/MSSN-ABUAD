import React, { useEffect, useState } from "react";
import { ShoppingCart, Package, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const thingsWeSell = [
    "Caps",
    "Socks",
    "Jilbabs (Premium, Regular)",
    "Prayer Mat(Soft, Regular)",
    "Kettles",
    "Dates",
    "Qur'an",
    "Tasbeeh, Counters",
  ];

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://mssn-abuad.onrender.com/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [products]);

  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">Available Products</h1>
          <div className="relative">
            <ShoppingCart className="text-primary" size={24} />
          </div>
        </div>
        {!loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden max-h-max"
              >
                <img
                  src={product.image_url || "https://via.placeholder.com/50"}
                  alt={product.name}
                  className="w-full h-48 object-cover hover:h-max hover:z-50"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-base mb-4 h-12">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-8">
                    <span className="text-primary font-bold">
                      ₦{product.price}
                    </span>

                    <div className="flex gap-x-2">
                      <Link
                        to="https://wa.me/2348108660433?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20a%20product."
                        className="btn btn-primary p-2"
                      >
                        WhatsApp
                      </Link>

                      <Link
                        to="tel:+2348108660433"
                        className="btn btn-primary p-2"
                      >
                        <Phone />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="pt-32 pb-16 container text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Loading store products...</p>
          </div>
        )}
        {products == [] && loading === false ? (
          <p className="mt-4">No available product</p>
        ) : (
          ""
        )}
        <div className="pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Things We Sell
          </h2>
          <ul className="list-disc list-inside text-xl text-gray-700">
            {thingsWeSell.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Store;
